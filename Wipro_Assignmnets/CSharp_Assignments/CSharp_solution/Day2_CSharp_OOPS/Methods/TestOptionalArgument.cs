using System.Data;

namespace Day2_CSharp_OOPS.Methods
{
    internal class TestOptionalArgument
    {
        static void Main(string[] args)
        {
            add(1, 12);
            add(10);
            add(b: 20, a: 15);
            // add(b: 20, 10);
        }

        static void add(int a, int b=10)
        {
            int res = a + b;
            Console.WriteLine($"Result:{res}");
        }
    }
}
