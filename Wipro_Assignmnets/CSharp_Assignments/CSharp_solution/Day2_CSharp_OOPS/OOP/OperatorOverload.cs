using System.Xml.Linq;

namespace Day2_CSharp_OOPS.OOP
{
    class CalcNumber
    {
        public int X { get; set; }
        public int Y { get; set; }

        public CalcNumber(int n1, int n2)
        {
            X = n1;
            Y = n2;
        }

        //Overload + operator
        public static CalcNumber operator +(CalcNumber c1, CalcNumber c2)
        {
            return new CalcNumber(c1.X + c2.X, c1.Y + c2.Y);
        }

        //Overload - operator
        public static CalcNumber operator -(CalcNumber c1, CalcNumber c2)
        {
            return new CalcNumber(c1.X - c2.X, c1.Y - c2.Y);
        }
    }
    internal class TestOperatorOverload
    {
        static void Main(string[] args)
        {
            CalcNumber c1 = new CalcNumber(10, 20);
            CalcNumber c2 = new CalcNumber(50, 100);

            CalcNumber sum = c1 + c2;
            CalcNumber sub = c1 - c2;

            Console.WriteLine($"c1: {c1.X}");
            Console.WriteLine($"c1: {c1.Y}");

            Console.WriteLine($"c2: {c2.X}");
            Console.WriteLine($"c2: {c2.Y}");

            Console.WriteLine();
            Console.WriteLine($"Sum: {sum.X}");
            Console.WriteLine($"Sum: {sum.Y}");

            Console.WriteLine($"Sub: {sub.X}");
            Console.WriteLine($"Sub: {sub.Y}");

            Console.Read();
        }
    }
}
