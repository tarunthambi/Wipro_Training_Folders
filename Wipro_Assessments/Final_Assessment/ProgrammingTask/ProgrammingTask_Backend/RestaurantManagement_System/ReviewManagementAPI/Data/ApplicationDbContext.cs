using Microsoft.EntityFrameworkCore;
using ReviewManagementAPI.Model;
using System.Collections.Generic;

namespace ReviewManagementAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Review> Reviews { get; set; }
    }
}
