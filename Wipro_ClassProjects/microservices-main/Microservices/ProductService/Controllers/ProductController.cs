using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductService.Service;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly Service.ProductService _productService;

        public ProductController(Service.ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductDetails()
        {
            var productDetails = await _productService.GetProductDetailsAsync();
            return Ok(productDetails);
        }
    }
}
