namespace Day1_csharp.Arrays
{
    internal class TestJaggedArray
    {
        static void Main(string[] args)
        {
            int[][] jaggedArray = new int[3][];
            {
                jaggedArray[0] = new int[] { 1, 2, 3, 4, 5 };
                jaggedArray[1] = new int[] { 6, 7, 8 };
                jaggedArray[2] = new int[] { 9, 10 };

                foreach (int[] r in jaggedArray) // iterate in the rows
                {
                    foreach (int c in r) // iterate in the columns
                    {
                        Console.Write(c + " ");
                    }
                    Console.WriteLine();
                }
                Console.ReadLine();
            }
        }
    }
}
