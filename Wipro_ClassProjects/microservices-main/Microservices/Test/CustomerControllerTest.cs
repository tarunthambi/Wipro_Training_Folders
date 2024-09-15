using System.Collections.Generic;
using CustomerService.Models;
using CustomerService.Repository;
using CustomerService.Service;
using CustomerService.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using CustomerService.Exceptions;
using Microsoft.Extensions.Logging;

namespace Test
{
    
    public class CustomerControllerTest
    {
        private readonly Mock<ICustomerService> _mockCustomerService;
        private readonly Mock<ILogger<CustomerController>> _mockLogger;
        private readonly CustomerController _controller;

        public CustomerControllerTest()
        {
            _mockCustomerService = new Mock<ICustomerService>();
            _mockLogger = new Mock<ILogger<CustomerController>>();
            _controller = new CustomerController(_mockCustomerService.Object, _mockLogger.Object);
        }

        [Fact]
        public async Task CreateCustomer_ReturnsCreatedAtActionResult()
        {
            // Arrange
            var customer = new Customer { Id = 1, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890"  };            
            _mockCustomerService.Setup(service => service.AddCustomerAsync(customer)).Returns(Task.CompletedTask);
           
            // Act
            var result = await _controller.CreateCustomer(customer);        

            // Assert
            var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(result);
            Assert.Equal("GetCustomer", createdAtActionResult.ActionName);
            Assert.Equal(customer.Id, ((Customer)createdAtActionResult.Value).Id);
            
        }

        [Fact]        
        public async Task GetAllCustomers_Returns_ListOfCustomers()
        {
            // Arrange
            var customers = new List<Customer> { new Customer { Id = 1, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890" } };
            _mockCustomerService.Setup(service => service.GetAllCustomersAsync()).ReturnsAsync(customers);

            // Act
            var result = await _controller.GetAllCustomers();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnCustomers = Assert.IsType<List<Customer>>(okResult.Value);
            Assert.Single(returnCustomers);
        }

        [Fact]
        public async Task GetCustomer_Returns_Customer()
        {
            // Arrange
            var id = 1;
             var customer = new Customer { Id = id, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890" };
            _mockCustomerService.Setup(service => service.GetCustomerByIdAsync(1)).ReturnsAsync(customer);

            // Act
            var result = await _controller.GetCustomer(id);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnCustomer = Assert.IsType<Customer>(okResult.Value);
            Assert.Equal(1, returnCustomer.Id);
        }               

        [Fact]
        public async Task UpdateCustomer_ReturnsNoContent()
        {
            // Arrange
            var customer = new Customer { Id = 1, Name = "John" ,Email="John@test.com",PhoneNumber="1111111111"};
            _mockCustomerService.Setup(service => service.UpdateCustomerAsync(customer)).Returns(Task.CompletedTask);

            // Act
            var result = await _controller.UpdateCustomer(1, customer);

            // Assert
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public async Task DeleteCustomer_ReturnsNoContent()
        {
            // Arrange
            _mockCustomerService.Setup(service => service.DeleteCustomerAsync(2)).Returns(Task.CompletedTask);

            // Act
            var result = await _controller.DeleteCustomer(2);

            // Assert
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public async Task UpdateCustomer_ReturnsBadRequest_WhenIdMismatch()
        {
            // Arrange
            var customer = new Customer { Id = 1, Name = "John" };

            // Act
            var result = await _controller.UpdateCustomer(2, customer);

            // Assert
            Assert.IsType<BadRequestResult>(result);
        }

        

        [Fact]
        public async Task DeleteCustomer_ReturnsNotFound_WhenCustomerNotFound()
        {
            // Arrange
            var id = 2;
            _mockCustomerService.Setup(service => service.DeleteCustomerAsync(id)).ThrowsAsync(new CustomerNotFoundException(id));

            // Act
            var result = await _controller.DeleteCustomer(id);

            // Assert
            var notFoundResult = Assert.IsType<NotFoundObjectResult>(result);
            Assert.Equal($"Customer with id {id} not found", notFoundResult.Value);
        }
        [Fact]
        public async Task GetCustomer_ReturnsNotFound_WhenCustomerNotFound()
        {
            // Arrange
            var id = 2;
            _mockCustomerService.Setup(service => service.GetCustomerByIdAsync(id)).ThrowsAsync(new CustomerNotFoundException(id));

            // Act
            var result = await _controller.GetCustomer(id);

            // Assert
            var notFoundResult = Assert.IsType<NotFoundObjectResult>(result.Result);
            Assert.Equal($"Customer with id {id} not found", notFoundResult.Value);
        }
    }
}
