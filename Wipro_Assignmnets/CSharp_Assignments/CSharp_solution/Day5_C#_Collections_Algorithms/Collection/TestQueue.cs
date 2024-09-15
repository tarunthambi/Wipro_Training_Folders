namespace Day5_C__Collections_Algorithms.Collection
{
    internal class TestQueue
    {
        static void Main(string[] args)
        {
            Queue<string> queue = new Queue<string>();
            queue.Enqueue("A");
            queue.Enqueue("B");
            queue.Enqueue("C");
            queue.Enqueue("D");
            queue.Enqueue("E");

            foreach (var item in queue)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();

            while (queue.Count > 0)
                Console.WriteLine(queue.Dequeue());

            Console.Read();
        }
    }
}