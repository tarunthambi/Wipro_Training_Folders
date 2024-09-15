using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductAPI.Models;
using ProductAPI.Repository;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemRepository _itemRepository;
        public ItemsController(ITemRepository tem)
        {
            _itemRepository = tem;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
                var items=await _itemRepository.GetAllAsync();
                return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItems(int id)
        {
            var item = await _itemRepository.GetItemByIdAsync(id);
            return Ok(item);
        }

        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item) 
        {
            var createditem=await _itemRepository.AddAsync(item);
            return Ok(createditem);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItem(int id) 
        {
            await _itemRepository.DeleteAsync(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItem(int id,Item item)
        {
            await _itemRepository.UpdateAsync(item);
            return NoContent();
        }
    }
}
