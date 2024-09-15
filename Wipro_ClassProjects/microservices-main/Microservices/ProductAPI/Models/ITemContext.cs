using Microsoft.EntityFrameworkCore;
using System.Data;

namespace ProductAPI.Models
{
    public class ITemContext:DbContext
    {
        public ITemContext(DbContextOptions<ITemContext> options):base(options) 
        {
            
        }

        public DbSet<Item> Items { get; set; }
    }
}
