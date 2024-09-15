using Microsoft.AspNetCore.Mvc;
using OrderManagementAPI.Models;
using OrderManagementAPI.Service;

namespace OrderManagementAPI.Controllers
{

        [ApiController]
        [Route("api/[controller]")]
        public class OrderController : ControllerBase
        {
            private readonly IOrderService _orderService;

            public OrderController(IOrderService orderService)
            {
                _orderService = orderService;
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
            {
                var orders = await _orderService.GetOrdersAsync();
                return Ok(orders);
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Order>> GetOrder(int id)
            {
                var order = await _orderService.GetOrderByIdAsync(id);
                if (order == null)
                {
                    return NotFound();
                }
                return Ok(order);
            }

            [HttpPost]
            public async Task<ActionResult<Order>> CreateOrder(Order order)
            {
                var createdOrder = await _orderService.CreateOrderAsync(order);
                return CreatedAtAction(nameof(GetOrder), new { id = createdOrder.OrderID }, createdOrder);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateOrder(int id, Order order)
            {
                if (id != order.OrderID)
                {
                    return BadRequest();
                }

                var updatedOrder = await _orderService.UpdateOrderAsync(order);
                if (updatedOrder == null)
                {
                    return NotFound();
                }

                return NoContent();
            }

            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteOrder(int id)
            {
                var result = await _orderService.DeleteOrderAsync(id);
                if (!result)
                {
                    return NotFound();
                }

                return NoContent();
            }
        }
    
}
