using MenuManagementAPI.Data;
using MenuManagementAPI.Models;
using MenuManagementAPI.Service;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestautantManagement_Test
{
    [TestFixture]
    public class ServiceMenuTests
    {
        private MenuService _serviceMenu;
        private ApplicationDbContext _context;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
             .UseInMemoryDatabase(databaseName: "MenuDatabase")
             .Options;

            _context = new ApplicationDbContext(options);
            _serviceMenu = new MenuService(_context);

            // Seed data with all required fields
            _context.MenuItems.AddRange(
              new MenuItem { ItemID = 1, Name = "Pizza", Category = "Main Course", Description = "Delicious cheese pizza", Price = 9.99M },
              new MenuItem { ItemID = 2, Name = "Burger", Category = "Fast Food", Description = "Juicy beef burger", Price = 5.99M }
          );
            _context.SaveChanges();
        }

        [Test]
        public async Task AddMenuItemAsync_AddsMenuItemSuccessfully()
        {
            // Arrange
            var newMenuItem = new MenuItem
            {
                ItemID = 3,
                Name = "Pasta",
                Category = "Main Course",
                Description = "Creamy Alfredo pasta",
                Price = 12.99M
            };

            // Act
            var addedItem = await _serviceMenu.AddMenuItemAsync(newMenuItem);

            // Assert
            Assert.AreEqual(newMenuItem, addedItem);
            Assert.AreEqual(3, _context.MenuItems.Count());
        }


        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task GetMenuItemsAsync_ReturnsAllMenuItems()
        {
            // Act
            var menuItems = await _serviceMenu.GetMenuItemsAsync();

            // Assert
            Assert.AreEqual(2, menuItems.Count());
        }

        [Test]
        public async Task GetMenuItemByIdAsync_ReturnsCorrectMenuItem()
        {
            // Act
            var menuItem = await _serviceMenu.GetMenuItemByIdAsync(1);

            // Assert
            Assert.IsNotNull(menuItem);
            Assert.AreEqual(1, menuItem.ItemID);
            Assert.AreEqual("Pizza", menuItem.Name);
        }



        [Test]
        public async Task DeleteMenuItemAsync_DeletesMenuItemSuccessfully()
        {
            // Act
            var result = await _serviceMenu.DeleteMenuItemAsync(1);

            // Assert
            Assert.IsTrue(result);
            Assert.AreEqual(1, _context.MenuItems.Count());
        }

        [Test]
        public async Task UpdateMenuItemAsync_UpdatesMenuItemSuccessfully()
        {
            // Arrange
            var menuItem = await _context.MenuItems.FindAsync(1);
            menuItem.Name = "Updated Pizza";

            // Act
            var updatedItem = await _serviceMenu.UpdateMenuItemAsync(menuItem);

            // Assert
            Assert.AreEqual("Updated Pizza", updatedItem.Name);
        }
    }
}
