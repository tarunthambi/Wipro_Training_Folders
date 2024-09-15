namespace Day2_Assignment.TASK2_Arrays
{
    internal class ReversingArray
    {
        static void Main(string[] args)
        {
            // converting array into reversed array
            int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            ReversedArray(array);
        }
        public static void ReversedArray(int[] array)
        {
            if (array.Length==0)
            {
                Console.Write("Array is empty");
            }

            Console.WriteLine("Input array: ");
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write(array[i] + " ");
            }
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("Reversed Array: ");
            for (int i = array.Length - 1; i >= 0; i--)
            {
                Console.Write(array[i] + " ");
            }
            Console.WriteLine();
        }
    }
}

