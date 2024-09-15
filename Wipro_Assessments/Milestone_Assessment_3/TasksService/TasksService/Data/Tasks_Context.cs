using Microsoft.EntityFrameworkCore;
using TasksService.Models;

namespace TasksService.Data
{
    public class Tasks_Context : DbContext
    {
        public Tasks_Context(DbContextOptions<Tasks_Context> options)
            : base(options)
        {
        }

        public DbSet<Tasks> Tasks { get; set; } = default!;
    }
}
