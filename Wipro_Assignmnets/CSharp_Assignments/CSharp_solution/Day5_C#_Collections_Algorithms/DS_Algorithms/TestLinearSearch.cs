using System.Diagnostics;
namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    internal class TestLinearSearch
    {
        static Stopwatch _stopwatch;
        static void Main(string[] args)
        {
            _stopwatch = new Stopwatch();

            //Linked List
            LinkedList<int> list = new LinkedList<int>(
                new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });

            //Stack
            Stack<int> stack = new Stack<int>(
                new[] { 1, 2, 3, 4, 5, 8, 0 }
                );

            //Queue
            Queue<int> queue = new Queue<int>(
                new int[] { 3, 5, 6, 1, 4, 8, 7, 9 });

            //Search Item
            Console.WriteLine("Enter search element (1 - 10)");
            int searchitem = Convert.ToInt32(Console.ReadLine());

            //Linear Search for LinkedList
            bool foundlistitem = FunctionLinearSearch_LinkedList(list, searchitem);
            if (foundlistitem)
            {
                Console.WriteLine($"{searchitem} found in list");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in list");
            }

            //Linear Search for Stack
            bool foundstackitem = FunctionLinearSearch_Stack(stack, searchitem);
            if (foundstackitem)
            {
                Console.WriteLine($"{searchitem} found in stack");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in stack");
            }

            //Linear Search for Queue
            bool foundqueueitem = FunctionLinearSearch_Queue(queue, searchitem);
            if (foundqueueitem)
            {
                Console.WriteLine($"{searchitem} found in queue");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in queue");
            }
        }

        private static bool FunctionLinearSearch_Queue(Queue<int> queue, int searchiteminqueue)
        {
            _stopwatch.Start();
            foreach (int item in queue)
            {
                if (item == searchiteminqueue)
                {
                    return true;
                }
            }
            _stopwatch.Stop();
            Console.WriteLine("Time Taken: " + _stopwatch.Elapsed);
            return false;

        }

        private static bool FunctionLinearSearch_Stack(Stack<int> stack, int searchiteminstack)
        {
            foreach (int item in stack)
            {
                if (item == searchiteminstack)
                {
                    return true;
                }
            }
            return false;
        }

        private static bool FunctionLinearSearch_LinkedList(LinkedList<int> list, int searchiteminlist)
        {
            foreach (int item in list)
            {
                if (item == searchiteminlist)
                {
                    return true;
                }

            }
            return false;
        }
    }
}
