using CustomerService.Exceptions;
using CustomerService.Models;
using CustomerService.Repository;

namespace CustomerService.Service
{
    public class CustomerService : ICustomerService
    {
        public ICustomerRepository _repository;

        //Constructor DI

        public CustomerService(ICustomerRepository customerRepository)
        {
            _repository = customerRepository;
        }
        public async Task AddCustomerAsync(Customer customer)
        {
            await _repository.AddCustomerAsync(customer);
        }

        public async Task DeleteCustomerAsync(int id)
        {
           var customer=await _repository.GetCustomerByIdAsync(id);
            if(customer == null)
            {
                throw new CustomerNotFoundException(id);
            }
            await _repository.DeleteCustomerAsync(id);
        }

        public async Task<IEnumerable<Customer>> GetAllCustomersAsync()
        {
            return await _repository.GetAllCustomersAsync();
        }

        public async Task<Customer> GetCustomerByIdAsync(int id)
        {
            var customer = await _repository.GetCustomerByIdAsync(id);
            if (customer == null)
            {
                throw new CustomerNotFoundException(id);
            }
            return customer;
        }

        public async Task UpdateCustomerAsync(Customer customer)
        {
           await _repository.UpdateCustomerAsync(customer);
        }
    }
}
