using System.Security.Principal;

namespace AuthService.Models
{
    public class UserLogin
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
