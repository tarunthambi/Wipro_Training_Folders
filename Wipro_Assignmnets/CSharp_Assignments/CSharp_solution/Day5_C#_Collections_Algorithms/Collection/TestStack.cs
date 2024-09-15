namespace Day5_C__Collections_Algorithms.Collection
{
    internal class TestStack
    {
        static void Main(string[] args)
        {
            Stack<int> stack = new Stack<int>();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);
            stack.Push(5);

            foreach (int i in stack)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();

            while (stack.Count > 0)
                Console.Write(stack.Pop() + " ");

            Console.WriteLine();
            Console.ReadKey();
        }
    }
}