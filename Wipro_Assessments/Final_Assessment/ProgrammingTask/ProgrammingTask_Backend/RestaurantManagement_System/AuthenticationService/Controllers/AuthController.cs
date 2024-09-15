using Microsoft.AspNetCore.Mvc;
using UserService.Data;
using UserService.Models;
using UserService.DTO;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using UserService.Helper;


namespace UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly string _jwtKey;

        public AuthController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _jwtKey = configuration["Jwt:Key"];
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserDto userDto)
        {
            if (userDto == null)
                return BadRequest(new { Message = "User object is null" });

            if (await CheckUserNameExistAsync(userDto.UserName))
                return BadRequest(new { Message = "User Name already exists" });

            if (await CheckEmailExistAsync(userDto.Email))
                return BadRequest(new { Message = "Email Id already exists" });

            var passStrengthMsg = CheckPasswordStrength(userDto.Password);
            if (!string.IsNullOrEmpty(passStrengthMsg))
                return BadRequest(new { Message = passStrengthMsg });

            var user = new User
            {
                UserName = userDto.UserName,
                Email = userDto.Email,
                Password = PasswordHasher.HashPassword(userDto.Password) // Use static method
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "User Registered" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] LoginUserDto userObj)
        {
            if (userObj == null)
                return BadRequest(new { Message = "User object is null" });

            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == userObj.Email);
            if (user == null)
                return NotFound(new { Message = "User Not Found" });

            if (!PasswordHasher.VerifyPassword(userObj.Password, user.Password))
                return BadRequest(new { Message = "Password is incorrect" });

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Name, user.UserName),
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new
            {
                Token = tokenString,
                Username = user.UserName,
            });
        }

        [HttpGet("Profile")]
        public async Task<ActionResult<User>> GetUser(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == username);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        [HttpPut("Update Profile")]
        public async Task<IActionResult> UpdateUser(string username, [FromBody] UpdateUserDto updateUserDto)
        {
            if (updateUserDto == null)
                return BadRequest(new { Message = "Request object is null" });

            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == username);
            if (user == null)
                return NotFound(new { Message = "User not found" });

            if (!string.IsNullOrEmpty(updateUserDto.Email))
            {
                if (await CheckEmailExistAsync(updateUserDto.Email))
                    return BadRequest(new { Message = "Email Id already exists" });

                user.Email = updateUserDto.Email;
            }

            if (!string.IsNullOrEmpty(updateUserDto.Password))
            {
                var passStrengthMsg = CheckPasswordStrength(updateUserDto.Password);
                if (!string.IsNullOrEmpty(passStrengthMsg))
                    return BadRequest(new { Message = passStrengthMsg });

                user.Password = PasswordHasher.HashPassword(updateUserDto.Password);
            }

            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "User details updated successfully" });
        }

        private async Task<bool> CheckUserNameExistAsync(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username);
        }

        private async Task<bool> CheckEmailExistAsync(string email)
        {
            return await _context.Users.AnyAsync(x => x.Email == email);
        }

        private string CheckPasswordStrength(string password)
        {
            var errors = new List<string>();

            if (password.Length < 8)
                errors.Add("Minimum password length should be 8 characters");

            if (!(Regex.IsMatch(password, "[a-z]") && Regex.IsMatch(password, "[A-Z]") && Regex.IsMatch(password, "[0-9]")))
                errors.Add("Password should be alphanumeric");

            if (!Regex.IsMatch(password, "[<,>,@,!,#,$,%,^,&,*,(,),_,+,\\[,\\],{,},?,:,;,|,',\\,.,/,~,`,-,=]"))
                errors.Add("Password should contain special characters");

            return string.Join(Environment.NewLine, errors);
        }
    }
}

