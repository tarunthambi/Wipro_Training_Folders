using CustomerService.Models;

namespace CustomerService.Service
{
    public interface ICustomerService
    {
        Task<IEnumerable<Customer>> GetAllCustomersAsync();
        Task<Customer> GetCustomerByIdAsync(int id);
        Task AddCustomerAsync(Customer customer);
        Task DeleteCustomerAsync(int id);
        Task UpdateCustomerAsync(Customer customer);
    }
}
