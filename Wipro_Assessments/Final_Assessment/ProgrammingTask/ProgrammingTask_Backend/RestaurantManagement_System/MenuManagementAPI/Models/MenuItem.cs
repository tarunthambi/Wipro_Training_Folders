using System.ComponentModel.DataAnnotations;

namespace MenuManagementAPI.Models
{
    public class MenuItem
    {
        [Key]
        public int ItemID { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than 0.")]
        public decimal Price { get; set; }

        [Required]
        public string Category { get; set; }
    }
}

