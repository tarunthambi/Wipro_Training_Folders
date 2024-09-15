using MenuManagementAPI.Models;
using MenuManagementAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace MenuManagementAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class MenuController : ControllerBase
    {
        private readonly IMenuService _menuService;

        public MenuController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuItem>>> GetMenuItems()
        {
            var menuItems = await _menuService.GetMenuItemsAsync();
            return Ok(menuItems);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MenuItem>> GetMenuItem(int id)
        {
            var menuItem = await _menuService.GetMenuItemByIdAsync(id);
            if (menuItem == null)
            {
                return NotFound();
            }
            return Ok(menuItem);
        }

        [HttpPost]
        public async Task<ActionResult<MenuItem>> AddMenuItem(MenuItem menuItem)
        {
            var createdMenuItem = await _menuService.AddMenuItemAsync(menuItem);
            return CreatedAtAction(nameof(GetMenuItem), new { id = createdMenuItem.ItemID }, createdMenuItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMenuItem(int id, MenuItem menuItem)
        {
            if (id != menuItem.ItemID)
            {
                return BadRequest();
            }

            var updatedMenuItem = await _menuService.UpdateMenuItemAsync(menuItem);
            if (updatedMenuItem == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuItem(int id)
        {
            var result = await _menuService.DeleteMenuItemAsync(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
