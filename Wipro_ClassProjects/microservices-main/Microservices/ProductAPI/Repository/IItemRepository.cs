using ProductAPI.Models;

namespace ProductAPI.Repository
{
    public interface IItemRepository
    {
        Task<IEnumerable<Item>> GetAllAsync();

        Task<Item> GetItemByIdAsync(int id);
        Task<Item> AddAsync(Item item);

        Task<Item> UpdateAsync(Item item);
        Task DeleteAsync(int id);
    }
}
