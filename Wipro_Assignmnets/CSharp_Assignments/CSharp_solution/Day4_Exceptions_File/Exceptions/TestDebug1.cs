using System.Diagnostics;

namespace Day4_Exceptions_File.Exceptions
{
    internal class TestDebug1
    {
        public void Calc()
        {
            //int a;
            //int b;
            //a = 10;
            //Debug.WriteLine("a = " + a);
            //b = 20;
            //Debug.WriteLine("b = " + b);
            //int sum = a + b;
            //Debug.WriteLine("sum = " + sum);
            //Console.WriteLine("Sum Result = "+sum);

            int sum = 0;
            for (int i = 0; i < 5; i++)
            {
                sum += i;
                Debug.WriteLine(i + "  " + sum);
            }
            Console.WriteLine("Sum = " + sum);
        }
        static void Main(string[] args)
        {
            new TestDebug1().Calc();
            Console.ReadLine();
        }
    }
}
