using CustomerService.Exceptions;
using CustomerService.Models;
using CustomerService.Service;
using Microsoft.AspNetCore.Mvc;

namespace CustomerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly ILogger _logger;

        //Constructor DI
        public CustomerController(ICustomerService service, ILogger<CustomerController> logger)
        {
            _customerService = service;
            _logger = logger;
            _logger.LogInformation("Constructor for logger called");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetAllCustomers()
        {
            _logger.LogInformation("HTTP GET for all customers called");
            var cutomers=await _customerService.GetAllCustomersAsync();
            return Ok(cutomers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            _logger.LogInformation("HTTP GET for a customer called");
            try
            {
                var customer=await _customerService.GetCustomerByIdAsync(id);
                return Ok(customer);
            }
            catch(CustomerNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer(Customer customer)
        {
            _logger.LogInformation("HTTP POST for adding new customer called");
            await _customerService.AddCustomerAsync(customer);
            return CreatedAtAction(nameof(GetCustomer), new {id=customer.Id},customer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomer(int id,Customer customer)
        {
            _logger.LogInformation("HTTP PUT for update customer called");
            if (id != customer.Id)
            {
                return BadRequest();
            }
            try
            {
                await _customerService.UpdateCustomerAsync(customer);
            }
            catch(CustomerNotFoundException ex)
            {
                return NotFound(ex.Message);
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            _logger.LogInformation("HTTP DELETE for update customer called");
            try
            {
                await _customerService.DeleteCustomerAsync(id);
            }
            catch (CustomerNotFoundException ex)
            {
                return NotFound(ex.Message);
            }

            return NoContent();
        }
    }
}
