using System.ComponentModel.DataAnnotations;

namespace OrderManagementAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }

        [Required]
        public int CustomerID { get; set; }

        [Required]
        public List<int> ItemIDs { get; set; }

        [Range(0.01, double.MaxValue, ErrorMessage = "Total amount must be greater than 0.")]
        public decimal TotalAmount { get; set; }

        [Required]
        public string OrderStatus { get; set; }
    }
}
