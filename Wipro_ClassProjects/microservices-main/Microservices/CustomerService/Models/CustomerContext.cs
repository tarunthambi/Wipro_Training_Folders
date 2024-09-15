using Microsoft.EntityFrameworkCore;

namespace CustomerService.Models
{
    public class CustomerContext:DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options):
            base(options)
        {       
            Database.EnsureCreated();
        }

        public DbSet<Customer> Customers { get; set; }
    }
}
