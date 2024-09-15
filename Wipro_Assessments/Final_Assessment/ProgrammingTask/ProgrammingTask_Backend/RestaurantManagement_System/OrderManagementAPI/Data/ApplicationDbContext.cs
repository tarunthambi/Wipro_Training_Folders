using Microsoft.EntityFrameworkCore;
using OrderManagementAPI.Models;

namespace OrderManagementAPI.Data
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Order> Orders { get; set; }
    }

}
