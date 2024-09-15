namespace Day1_csharp.Arrays
{
    internal class TestTwoDimArray
    {
        static void Main(string[] args)
        {
            int[,] array2d = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

            Console.WriteLine("Length of array2d: "+array2d.Length);
            Console.WriteLine("Length of row1: "+array2d.GetLength(0));

            foreach (int i in array2d)
            {
                Console.Write(i+"\t");
            }
            Console.WriteLine();
            Console.ReadLine();
        }
    }
}
