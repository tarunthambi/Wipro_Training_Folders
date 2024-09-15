using System.ComponentModel.DataAnnotations;

namespace ReviewManagementAPI.Model
{
    public class Review
    {
        [Key]
        public int ReviewID { get; set; }

        [Required]
        public int CustomerID { get; set; }

        [Required]
        public int ItemID { get; set; }

        [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5.")]
        public int Rating { get; set; }

        public string Comment { get; set; }
    }
}
