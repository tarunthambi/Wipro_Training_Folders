namespace Day5_C__Collections_Algorithms
{
    internal class FindindEvenAndOddCount
    {
        static void Main(string[] args)
        {

            EvenAndOddCount();
        }
        public static void EvenAndOddCount()
        {
            Console.Write("Enter the size of the array: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int even_count = 0;
            int odd_count = 0;
            int[] arr = new int[n];
            try
            {
                for (int i = 0; i < n; i++)
                {
                    Console.Write($"Enter value {i + 1}: ");
                    arr[i+1] = Convert.ToInt32(Console.ReadLine());
                }
                foreach (int i in arr)
                {
                    if (i%2==0)
                    {
                        even_count++;
                    }
                    else
                    {
                        odd_count++;
                    }
                }
            }
            catch(FormatException fe)
            {
                Console.WriteLine(fe.Message);
            }
            catch(IndexOutOfRangeException ie)
            {
                Console.WriteLine(ie.Message);
            }
            finally
            {
                Console.WriteLine($"Even number count:{even_count}\nOdd number count: {odd_count}");
            }
        }
    }
}

