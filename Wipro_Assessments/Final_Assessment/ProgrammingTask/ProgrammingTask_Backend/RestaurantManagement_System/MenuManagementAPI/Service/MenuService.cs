using MenuManagementAPI.Data;
using MenuManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MenuManagementAPI.Service
{
    public class MenuService : IMenuService
    {
        private readonly ApplicationDbContext _context;

        public MenuService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<MenuItem>> GetMenuItemsAsync()
        {
            return await _context.MenuItems.ToListAsync();
        }

        public async Task<MenuItem> GetMenuItemByIdAsync(int id)
        {
            return await _context.MenuItems.FindAsync(id);
        }

        public async Task<MenuItem> AddMenuItemAsync(MenuItem menuItem)
        {
            _context.MenuItems.Add(menuItem);
            await _context.SaveChangesAsync();
            return menuItem;
        }

        public async Task<MenuItem> UpdateMenuItemAsync(MenuItem menuItem)
        {
            _context.Entry(menuItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return menuItem;
        }

        public async Task<bool> DeleteMenuItemAsync(int id)
        {
            var menuItem = await _context.MenuItems.FindAsync(id);
            if (menuItem == null)
            {
                return false;
            }

            _context.MenuItems.Remove(menuItem);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
