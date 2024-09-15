using System.Diagnostics.CodeAnalysis;

namespace Day4_Exceptions_File.Exceptions
{
    internal class System
    {
        static void Main(string[] args)
        {
            int sum = 0;
            global::System.Console.WriteLine("Test");

            try
            {
                int a = 2147483647;
                int b = 0;
                sum = checked(a + b);
            }
            catch (global::System.Exception e)
            {
                global::System.Console.WriteLine(e.Message);
            }
            finally
            {
                Console.WriteLine("Result = " + sum);
            }

            Console.Read();
        }
    }
}
