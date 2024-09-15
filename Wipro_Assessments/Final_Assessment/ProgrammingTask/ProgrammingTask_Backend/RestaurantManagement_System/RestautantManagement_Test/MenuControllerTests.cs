using MenuManagementAPI.Controllers;
using MenuManagementAPI.Models;
using MenuManagementAPI.Service;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestautantManagement_Test
{
    [TestFixture]
    public class MenuControllerTests
    {
        private Mock<IMenuService> _mockMenuService;
        private MenuController _controller;

        [SetUp]
        public void Setup()
        {
            _mockMenuService = new Mock<IMenuService>();
            _controller = new MenuController(_mockMenuService.Object);
        }

        [Test]
        public async Task GetMenuItems_ReturnsOkWithMenuItems()
        {
            // Arrange
            var mockMenuItems = new List<MenuItem>
            {
                new MenuItem { ItemID = 1, Name = "Pizza" },
                new MenuItem { ItemID = 2, Name = "Burger" }
            };
            _mockMenuService.Setup(service => service.GetMenuItemsAsync())
                .ReturnsAsync(mockMenuItems);

            // Act
            var result = await _controller.GetMenuItems();
            var okResult = result.Result as OkObjectResult;

            // Assert
            Assert.IsNotNull(okResult);
            Assert.AreEqual(200, okResult.StatusCode);
            Assert.AreEqual(mockMenuItems, okResult.Value);
        }

       

        [Test]
        public async Task AddMenuItem_ReturnsCreatedAtAction()
        {
            // Arrange
            var newMenuItem = new MenuItem { ItemID = 3, Name = "Pasta" };
            _mockMenuService.Setup(service => service.AddMenuItemAsync(newMenuItem))
                .ReturnsAsync(newMenuItem);

            // Act
            var result = await _controller.AddMenuItem(newMenuItem);
            var createdAtActionResult = result.Result as CreatedAtActionResult;

            // Assert
            Assert.IsNotNull(createdAtActionResult);
            Assert.AreEqual(201, createdAtActionResult.StatusCode);
            Assert.AreEqual(newMenuItem, createdAtActionResult.Value);
        }

        

        [Test]
        public async Task DeleteMenuItem_ReturnsNotFound_WhenItemDoesNotExist()
        {
            // Arrange
            _mockMenuService.Setup(service => service.DeleteMenuItemAsync(1))
                .ReturnsAsync(false);

            // Act
            var result = await _controller.DeleteMenuItem(1);

            // Assert
            Assert.IsInstanceOf<NotFoundResult>(result);
        }
    }
}
