using CustomerService.Models;
using CustomerService.Repository;
using Microsoft.EntityFrameworkCore;

namespace Test
{

    public class CustomerRepositoryTest
    {
        private readonly DbContextOptions<CustomerContext> _options;

        public CustomerRepositoryTest()
        {
            _options = new DbContextOptionsBuilder<CustomerContext>()
                .UseInMemoryDatabase(databaseName: "CustomerDatabase")
                .Options;
        }

        [Fact]
        public async Task AddCustomerAsync_AddsCustomer()
        {
            // Arrange
            var customer = new Customer { Id = 2, Name = "Customer2", Email = "Customer2@test.com", PhoneNumber = "1234567890" };
            var id = 2;
            using (var context = new CustomerContext(_options))
            {
                var repository = new CustomerRepository(context);

                // Act
                await repository.AddCustomerAsync(customer);
            }

            using (var context = new CustomerContext(_options))
            {
                // Assert
                var addedCustomer = await context.Customers.FindAsync(2);
                Assert.NotNull(addedCustomer);
                Assert.Equal("Customer2", addedCustomer.Name);
            }
        }

        [Fact]
        public async Task DeleteCustomerAsync_DeletesCustomer()
        {
            // Arrange
            var customer = new Customer { Id = 3, Name = "Customer3",Email= "Customer3@test.com", PhoneNumber = "1234567890" };
            var id = 3;
            using (var context = new CustomerContext(_options))
            {
                context.Customers.Add(customer);
                context.SaveChanges();
            }

            using (var context = new CustomerContext(_options))
            {
                var repository = new CustomerRepository(context);

                // Act

                await repository.DeleteCustomerAsync(id);
            }

            using (var context = new CustomerContext(_options))
            {
                // Assert
                var deletedCustomer = await context.Customers.FindAsync(id);
                Assert.Null(deletedCustomer);
            }
        }

        [Fact]
        public async Task GetAllCustomersAsync_ReturnsAllCustomers()
        {
            // Arrange
            var customer1 = new Customer { Id = 4, Name = "Customer4",Email="Customer4@test.com",PhoneNumber="1234567890" };
            var customer2 = new Customer { Id = 5, Name = "Customer5", Email = "Customer5@test.com", PhoneNumber = "1234567890" };

            using (var context = new CustomerContext(_options))
            {
                context.Customers.AddRange(new[] { customer1, customer2 });
                context.SaveChanges();
            }

            using (var context = new CustomerContext(_options))
            {
                var repository = new CustomerRepository(context);

                // Act
                var customers = await repository.GetAllCustomersAsync();

                // Assert
                Assert.Equal(2, customers.Count());
            }
        }

        [Fact]
        public async Task GetCustomerByIdAsync_ReturnsCustomer()
        {
            // Arrange
            var customer = new Customer { Id = 6, Name = "Customer6", Email = "Customer6@test.com", PhoneNumber = "1234567890" };
            var id = 6;
            using (var context = new CustomerContext(_options))
            {
                context.Customers.Add(customer);
                context.SaveChanges();
            }

            using (var context = new CustomerContext(_options))
            {
                var repository = new CustomerRepository(context);

                // Act
                var retrievedCustomer = await repository.GetCustomerByIdAsync(id);

                // Assert
                Assert.NotNull(retrievedCustomer);
                Assert.Equal("Customer6", retrievedCustomer.Name);
            }
        }

        [Fact]
        public async Task UpdateCustomerAsync_UpdatesCustomer()
        {
            // Arrange
            var customer = new Customer { Id = 1, Name = "John", Email = "John@test.com", PhoneNumber = "1234512345" };
            var id = 1;
            using (var context = new CustomerContext(_options))
            {
                context.Customers.Add(customer);
                context.SaveChanges();
            }

            using (var context = new CustomerContext(_options))
            {
                var repository = new CustomerRepository(context);

                // Act
                customer.Name = "John Updated";
                await repository.UpdateCustomerAsync(customer);
            }

            using (var context = new CustomerContext(_options))
            {
                // Assert
                var updatedCustomer = await context.Customers.FindAsync(id);
                Assert.NotNull(updatedCustomer);
                Assert.Equal("John Updated", updatedCustomer.Name);
            }
        }
    }
}
