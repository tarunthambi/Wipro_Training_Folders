using CustomerService.Exceptions;
using CustomerService.Models;
using CustomerService.Repository;
using CustomerService.Service;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace Test
{

    public class CustomerServiceTest
    {
        private readonly ICustomerService _service;
        private readonly Mock<ICustomerRepository> _repositoryMock;

        public CustomerServiceTest()
        {
            _repositoryMock = new Mock<ICustomerRepository>();
            _service = new CustomerService.Service.CustomerService(_repositoryMock.Object);
        }

        [Fact]
        public async Task AddCustomerAsync_ShouldCallRepositoryAddCustomerAsync()
        {
            // Arrange
            var customer = new Customer() { Id = 1, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890" };

            // Act
            await _service.AddCustomerAsync(customer);

            // Assert
            _repositoryMock.Verify(r => r.AddCustomerAsync(customer), Times.Once);
        }

        [Fact]
        public async Task DeleteCustomerAsync_Exists_ShouldCallRepositoryDeleteCustomerAsync()
        {
            // Arrange
            var customerId = 1;
            var customer = new Customer { Id = customerId, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890" };
            _repositoryMock.Setup(r => r.GetCustomerByIdAsync(customerId)).ReturnsAsync(customer);

            // Act
            await _service.DeleteCustomerAsync(customerId);

            // Assert
            _repositoryMock.Verify(r => r.DeleteCustomerAsync(customerId), Times.Once);
        }

        [Fact]
        public async Task DeleteCustomerAsync_ShouldThrowCustomerNotFoundException()
        {
            // Arrange
            var customerId = 1;
            _repositoryMock.Setup(r => r.GetCustomerByIdAsync(customerId)).ReturnsAsync((Customer)null);

            // Act & Assert
            await Assert.ThrowsAsync<CustomerNotFoundException>(() => _service.DeleteCustomerAsync(customerId));
        }

        [Fact]
        public async Task GetAllCustomersAsync_ShouldReturnAllCustomers()
        {
            // Arrange
            var customers = new List<Customer> { new Customer() { Id = 1, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890" },
                new Customer() {Id = 2, Name = "Customer2", Email = "Customer2@test.com", PhoneNumber = "1234567890"  }};
            _repositoryMock.Setup(r => r.GetAllCustomersAsync()).ReturnsAsync(customers);

            // Act
            var result = await _service.GetAllCustomersAsync();

            // Assert
            Assert.Equal(customers, result);
        }

        [Fact]
        public async Task GetCustomerByIdAsync_ShouldReturnCustomer_Exists()
        {
            // Arrange
            var customerId = 1;
            var customer = new Customer { Id = customerId, Name = "Customer1", Email = "Customer1@test.com", PhoneNumber = "1234567890" };
            _repositoryMock.Setup(r => r.GetCustomerByIdAsync(customerId)).ReturnsAsync(customer);

            // Act
            var result = await _service.GetCustomerByIdAsync(customerId);

            // Assert
            Assert.Equal(customer, result);
        }

        [Fact]
        public async Task GetCustomerByIdAsync_ShouldThrowCustomerNotFoundException()
        {
            // Arrange
            var customerId = 1;
            _repositoryMock.Setup(r => r.GetCustomerByIdAsync(customerId)).ReturnsAsync((Customer)null);

            // Act & Assert
            await Assert.ThrowsAsync<CustomerNotFoundException>(() => _service.GetCustomerByIdAsync(customerId));
        }

        [Fact]
        public async Task UpdateCustomerAsync_ShouldCallRepositoryUpdateCustomerAsync()
        {
            // Arrange
            var customer = new Customer() { Id = 1, Name = "Customer1", Email = "Customer1@testdomain.com", PhoneNumber = "1234567890" };

            // Act
            await _service.UpdateCustomerAsync(customer);

            // Assert
            _repositoryMock.Verify(r => r.UpdateCustomerAsync(customer), Times.Once);
        }
    }
}
