using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerService.Models
{
    public class Customer
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public  int  Id { get; set; }
        [Required]
        public string  Name { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
    }
}
