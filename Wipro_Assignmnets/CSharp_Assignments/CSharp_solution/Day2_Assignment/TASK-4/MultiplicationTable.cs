namespace Day2_Assignment.TASK_4
{
    internal class MultiplicationTable
    {
        static void Main(string[] args)
        {
            // Printing the multiplication table from 1 to 10
            MultiplicationTable1to10();
        }
        public static void MultiplicationTable1to10()
        {
            Console.WriteLine("Multiplication Table from 1 to 10");
            for (int i = 1; i < 11; i++)
            {
                Console.WriteLine($"Multiplication table of {i}");
                for (int j = 1; j < 11; j++)
                {
                    Console.Write($"{i} * {j} = "+i*j + "\n");
                }
                Console.WriteLine();
            }
        }
    }
}
