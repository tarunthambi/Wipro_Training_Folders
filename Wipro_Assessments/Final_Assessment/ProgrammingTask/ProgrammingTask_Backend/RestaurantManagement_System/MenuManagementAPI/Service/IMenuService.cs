using MenuManagementAPI.Models;

namespace MenuManagementAPI.Service
{
    public interface IMenuService
    {
        Task<IEnumerable<MenuItem>> GetMenuItemsAsync();
        Task<MenuItem> GetMenuItemByIdAsync(int id);
        Task<MenuItem> AddMenuItemAsync(MenuItem menuItem);
        Task<MenuItem> UpdateMenuItemAsync(MenuItem menuItem);
        Task<bool> DeleteMenuItemAsync(int id);
    }
}

