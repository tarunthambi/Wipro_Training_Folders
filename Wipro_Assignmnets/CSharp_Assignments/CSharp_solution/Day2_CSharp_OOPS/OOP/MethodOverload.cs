namespace Day2_CSharp_OOPS.OOP
{
    internal class TestMethodOverload
    {
        // No of parameters are different
        public void GetInfo()
        {
            Console.WriteLine("Overloading");
        }

        public string GetInfo(string str)
        {
            return str;
        }

        // Types of Parameters
        public int add(int x, int y)
        {
            return x + y;
        }
        public float add(float x, float y)
        {
            return x + y;
        }

        // Order of parameters
        string displayText(char c, string s)
        {
            return c + " " + s;
        }
        string displayText(string s, char c)
        {
            return s + " " + c;
        }
        static void Main(string[] args)
        {
            TestMethodOverload testMethodOverload = new TestMethodOverload();
            testMethodOverload.GetInfo();
            Console.WriteLine(testMethodOverload.GetInfo("Method Overloading"));

            Console.WriteLine();
            Console.WriteLine(testMethodOverload.add(1, 2));
            Console.WriteLine(testMethodOverload.add(1.4f, 2.5f));

            Console.WriteLine();
            Console.WriteLine(testMethodOverload.displayText('I', "Welcome you"));
            Console.WriteLine(testMethodOverload.displayText("I Welcome", 'U'));
            Console.ReadKey();
        }
    }
}
