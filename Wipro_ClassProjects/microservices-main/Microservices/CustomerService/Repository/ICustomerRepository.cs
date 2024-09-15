using CustomerService.Models;

namespace CustomerService.Repository
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetAllCustomersAsync();
        Task<Customer> GetCustomerByIdAsync(int id);
        Task AddCustomerAsync(Customer customer);
        Task DeleteCustomerAsync(int id);
        Task UpdateCustomerAsync(Customer customer);
    }
}
