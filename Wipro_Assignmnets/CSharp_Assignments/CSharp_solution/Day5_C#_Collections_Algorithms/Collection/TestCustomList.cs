namespace Day5_C__Collections_Algorithms.Collection
{
    class CartItem
    {
        public int ProdId { get; set; }
        public string ProductName { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
    }
    internal class TestCustomList
    {
        static void Main(string[] args)
        {
            CartItem c6 = new CartItem() { ProdId = 6, ProductName = "ColorPapers", Price = 35, Quantity = 2 };
            List<CartItem> itemslist = new List<CartItem>()
            {
                new CartItem {ProdId=1,ProductName="Book",Price=130,Quantity=2},
                new CartItem {ProdId=2,ProductName="Card",Price=40,Quantity=5},
                new CartItem {ProdId=3,ProductName="Pens",Price=20,Quantity=10},
                new CartItem {ProdId=4,ProductName="Colors",Price=100,Quantity=1},
                new CartItem {ProdId=5,ProductName="ColorPapers",Price=35,Quantity=2},
                c6
            };

            double rowtotal = 0;
            double grandtotal = 0;
            IEnumerator<CartItem> enumerator = itemslist.GetEnumerator();
            while (enumerator.MoveNext())
            {
                CartItem item = enumerator.Current;
                rowtotal = item.Quantity * item.Price;
                Console.WriteLine(item.ProductName + " " + item.Price + " " + item.Quantity + " " + rowtotal);

                grandtotal += rowtotal;
            }
            Console.WriteLine();
            Console.WriteLine("Total Price: " + grandtotal);

            itemslist.Clear();

            Console.ReadLine();
        }
    }
}
