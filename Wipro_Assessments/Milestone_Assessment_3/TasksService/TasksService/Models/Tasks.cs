using System.ComponentModel.DataAnnotations;

namespace TasksService.Models
{
    public class Tasks
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsCompleted { get; set; }
    }
}
