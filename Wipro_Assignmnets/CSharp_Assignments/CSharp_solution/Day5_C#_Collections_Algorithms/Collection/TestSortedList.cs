namespace Day5_C__Collections_Algorithms.Collection
{
    class Customer
    {
        public int Custid { get; set; }
        public string CustName { get; set; }
        public string Email { get; set; }
    }
    internal class TestSortedList
    {
        static void Main(string[] args)
        {
            Customer c1 = new Customer() { Custid = 1, CustName = "Customer1", Email = "C1@test.com" };
            Customer c2 = new Customer() { Custid = 2, CustName = "Customer2", Email = "C2@test.com" };
            Customer c3 = new Customer() { Custid = 3, CustName = "Customer3", Email = "C3@test.com" };
            Customer c4 = new Customer() { Custid = 4, CustName = "Customer4", Email = "C4@test.com" };

            //Generic Collection
            //SortedList<string,Customer> customers=new SortedList<string,Customer>();
            //customers.Add("C001", c1);
            //customers.Add("C004", c4);
            //customers.Add("C003", c3);
            //customers.Add("C002", c2);

            //No duplicate key can be added in SortedList
            SortedList<string, Customer> customers = null;
            try
            {
                customers = new SortedList<string, Customer>()
                {
                {"C001",c1 },
                {"C004",c4 },
                {"C003",c3 },
                {"C002",c2 },

                };
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }

            try
            {
                //Iterate
                foreach (KeyValuePair<string, Customer> v in customers)
                {
                    Console.Write(v.Key + ": " + v.Value.CustName + ", " + v.Value.Email);
                    Console.WriteLine();
                }
            }
            catch (NullReferenceException ex)
            {
                Console.WriteLine(ex.Message);
            }

            Console.ReadLine();

        }
    }
}