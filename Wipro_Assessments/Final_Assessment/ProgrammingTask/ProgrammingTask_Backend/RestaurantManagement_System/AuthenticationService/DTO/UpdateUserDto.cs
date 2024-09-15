using System.ComponentModel.DataAnnotations;

namespace UserService.DTO
{
    public class UpdateUserDto
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string Email { get; set; }

        [MinLength(8, ErrorMessage = "Minimum password length should be 8 characters.")]
        public string Password { get; set; }
    }
}
