using Microsoft.AspNetCore.Mvc;
using Moq;
using OrderManagementAPI.Controllers;
using OrderManagementAPI.Models;
using OrderManagementAPI.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestautantManagement_Test
{
    public class OrderControllerTests
    {
        private Mock<IOrderService> _mockOrderService;
        private OrderController _orderController;

        [SetUp]
        public void Setup()
        {
            _mockOrderService = new Mock<IOrderService>();
            _orderController = new OrderController(_mockOrderService.Object);
        }

        [Test]
        public async Task GetOrders_ReturnsAllOrders()
        {
            // Arrange
            var orders = new List<Order>
            {
                new Order { OrderID = 1, CustomerID = 101, ItemIDs = new List<int> { 1, 2 }, TotalAmount = 99.99M, OrderStatus = "Pending" },
                new Order { OrderID = 2, CustomerID = 102, ItemIDs = new List<int> { 3, 4 }, TotalAmount = 149.99M, OrderStatus = "Shipped" }
            };
            _mockOrderService.Setup(service => service.GetOrdersAsync()).ReturnsAsync(orders);

            // Act
            var result = await _orderController.GetOrders();

            // Assert
            var okResult = result.Result as OkObjectResult;
            var returnedOrders = okResult.Value as IEnumerable<Order>;
            Assert.AreEqual(2, returnedOrders.Count());
        }

        [Test]
        public async Task GetOrder_ReturnsCorrectOrder()
        {
            // Arrange
            var order = new Order { OrderID = 1, CustomerID = 101, ItemIDs = new List<int> { 1, 2 }, TotalAmount = 99.99M, OrderStatus = "Pending" };
            _mockOrderService.Setup(service => service.GetOrderByIdAsync(1)).ReturnsAsync(order);

            // Act
            var result = await _orderController.GetOrder(1);

            // Assert
            var okResult = result.Result as OkObjectResult;
            var returnedOrder = okResult.Value as Order;
            Assert.AreEqual(101, returnedOrder.CustomerID);
        }

        [Test]
        public async Task CreateOrder_ReturnsCreatedOrder()
        {
            // Arrange
            var newOrder = new Order { OrderID = 3, CustomerID = 103, ItemIDs = new List<int> { 5 }, TotalAmount = 59.99M, OrderStatus = "Processing" };
            _mockOrderService.Setup(service => service.CreateOrderAsync(It.IsAny<Order>())).ReturnsAsync(newOrder);

            // Act
            var result = await _orderController.CreateOrder(newOrder);

            // Assert
            var createdAtActionResult = result.Result as CreatedAtActionResult;
            var returnedOrder = createdAtActionResult.Value as Order;
            Assert.AreEqual(103, returnedOrder.CustomerID);
        }

        [Test]
        public async Task DeleteOrder_ReturnsNoContent()
        {
            // Arrange
            _mockOrderService.Setup(service => service.DeleteOrderAsync(1)).ReturnsAsync(true);

            // Act
            var result = await _orderController.DeleteOrder(1);

            // Assert
            Assert.IsInstanceOf<NoContentResult>(result);
        }
    }
}
