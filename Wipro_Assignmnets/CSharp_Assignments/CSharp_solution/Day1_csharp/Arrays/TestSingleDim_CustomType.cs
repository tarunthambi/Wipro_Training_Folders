namespace Day1_csharp.Arrays
{
    class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public string displayProduct()
        {
            return Id + ", " + Name + ", " +Price;
        }
    }
    internal class TestSingleDim_CustomType
    {
        static void Main(string[] args)
        {
            Product[] products = new Product[]
            {
                new Product { Id = 1,Name="Books",Price=100},
                new Product { Id = 2,Name="Game",Price=200},
                new Product { Id = 3,Name="Pen",Price=300},
                new Product { Id = 4,Name="Cards",Price=400},
                new Product { Id = 5,Name="Gifts",Price=500}
            };
            foreach (Product product in products)
            {
                Console.WriteLine(product.displayProduct());
            }
            Console.Read();
        }
    }
}
