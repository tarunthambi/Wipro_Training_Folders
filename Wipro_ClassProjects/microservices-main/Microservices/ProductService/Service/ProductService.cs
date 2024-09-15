using RestSharp;
using System.Text;

namespace ProductService.Service
{
    public class ProductService
    {
        private readonly string _apiKey;
        private readonly string _baseUrl;

        public ProductService()
        {
            _apiKey = "";
            _baseUrl = "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
        }

        public  async Task<string> GetProductDetailsAsync()
        {
            var client = new RestClient(_baseUrl);
            var request = new RestRequest();
            
            request.AddHeader("x-rapidapi-host", "real-time-amazon-data.p.rapidapi.com");
            request.AddHeader("x-rapidapi-key", _apiKey);

            var response = await client.ExecuteAsync(request);
            return response.Content;
        }
    }
}
