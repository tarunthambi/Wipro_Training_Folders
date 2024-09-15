namespace Day4_Exceptions_File.Exceptions
{
    internal class TestException
    {
        static void Main(string[] args)
        {
            int n1, n2, res = 0;
            n1 = 10;
            n2 = 0;
            try
            {
                res = n1 / n2;
            }
            catch (DivideByZeroException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (IndexOutOfRangeException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (NullReferenceException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Task is Completed !!!");
            }
            Console.WriteLine("Result = " + res);
            Console.ReadLine();

        }
    }
}
