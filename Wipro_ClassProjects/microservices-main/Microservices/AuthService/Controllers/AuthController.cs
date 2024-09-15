using AuthService.Data;
using AuthService.Helper;
using AuthService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Text.RegularExpressions;

namespace AuthService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
       
        public AuthController(ApplicationDbContext context)
        {
            _context = context;
            
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            if (userObj == null) { return BadRequest(); }
            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == userObj.UserName);
            if (user == null) { return NotFound(new { Message = "User Not Found" }); }
            if (!PasswordHasher.VerifyPassword(userObj.Password, user.Password))
            { return BadRequest(new { Message = "Password is incorrect" }); }            
            return Ok(new
            {
                username = user.UserName,
               
                Message = "Login Success"
            });
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<User>> GetUser(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == username);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if (userObj == null) { return BadRequest(); }

            //Check Username
            if (await CheckUserNameExistAsync(userObj.UserName))
            {
                return BadRequest(new { Message = "User Name already exist" });
            }
            //Check Email
            if (await CheckEmailExistAsync(userObj.Email))
            {
                return BadRequest(new { Message = "Email Id already exist" });
            }
            //Check Password Strength
            var pass = CheckPasswordStrength(userObj.Password);
            if (string.IsNullOrEmpty(userObj.Password))
            {
                return BadRequest(new { Message = pass.ToString() });
            }

            userObj.Password = PasswordHasher.HashPassword(userObj.Password);
           
            await _context.Users.AddAsync(userObj);
            await _context.SaveChangesAsync();
            return Ok(new { Message = "User Registered" });
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
            StringBuilder sb = new StringBuilder();
            if (password.Length < 8)
                sb.Append("Minimum password length should be 8" + Environment.NewLine);
            if (!(Regex.IsMatch(password, "[a-z]") && Regex.IsMatch(password, "[A-Z]") && Regex
                .IsMatch(password, "[0-9]")))
                sb.Append("Password should be Alphanumeric" + Environment.NewLine);
            if (!Regex.IsMatch(password, "[<,>,@,!,#,$,%,^,&,*,(,),_,+,\\[,\\],{,},?,:,;,|,',\\,.,/,~,`,-,=]"))
                sb.Append("Password should contain special characters" + Environment.NewLine);
            return sb.ToString();
        }
    }
}
