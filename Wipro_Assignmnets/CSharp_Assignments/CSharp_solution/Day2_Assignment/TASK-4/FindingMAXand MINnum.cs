using System.Transactions;

namespace Day2_Assignment.TASK_4
{
    internal class FindingMAXand_MINnum
    {
        static void Main(string[] args)
        {
            // Finding the minimuum and maximum value from the given array
            FindingMaxAndMin();
        }
        public static void FindingMaxAndMin()
        {
            Console.WriteLine("Enter the values of array: ");

            int[] arr1 = { 1, 2, 34, 213, 5, 56, 3, 7 };

            Console.WriteLine("Input array: ");
            for (int i = 0; i < arr1.Length; i++)
            {
                Console.Write(arr1[i] + " ");
            }
            Console.WriteLine();
            if (arr1.Length <= 0)
            {
                Console.WriteLine("The array is empty");
            }

            int min = arr1[0];
            int max = arr1[0];
            for (int i = 1; i < arr1.Length; i++)
            {
                if (arr1[i] < min)
                {
                    min = arr1[i];
                }
                else if (arr1[i] > max)
                {
                    max = arr1[i];
                }
            }

            Console.WriteLine("Minimum number is: " + min);
            Console.WriteLine("Maximum number is: " + max);
        }
    }
}
