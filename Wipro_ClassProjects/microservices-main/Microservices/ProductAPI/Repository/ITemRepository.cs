using Microsoft.EntityFrameworkCore;
using ProductAPI.Models;

namespace ProductAPI.Repository
{
    public class ITemRepository : IItemRepository
    {
        private readonly ITemContext _context;

        public ITemRepository(ITemContext temContext)
        {
            _context = temContext;
        }
        public async Task<Item> AddAsync(Item item)
        {
            _context.Items.Add(item);
            await _context.SaveChangesAsync();
            return item;
            
        }

        public async Task DeleteAsync(int id)
        {
            var item=await _context.Items.FindAsync(id);
            if (item != null)
            {
                _context.Items.Remove(item);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Item>> GetAllAsync()
        {
            return await _context.Items.ToListAsync();
        }

        public async Task<Item> GetItemByIdAsync(int id)
        {
            return await _context.Items.FindAsync(id);
        }

        public async Task<Item> UpdateAsync(Item item)
        {
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return item;
        }
    }
}
