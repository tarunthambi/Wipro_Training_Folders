using System.ComponentModel.DataAnnotations;

namespace UserService.DTO
{
    public class RegisterUserDto
    {
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Username must be between 3 and 50 characters.")]
        public string UserName { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string Email { get; set; }

        [Required]
        [MinLength(8, ErrorMessage = "Minimum password length should be 8 characters.")]
        public string Password { get; set; }
    }
}
