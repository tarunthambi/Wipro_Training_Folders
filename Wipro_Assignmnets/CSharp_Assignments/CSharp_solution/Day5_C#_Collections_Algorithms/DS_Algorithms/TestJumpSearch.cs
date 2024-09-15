namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    internal class TestJumpSearch
    {
        static void Main(string[] args)
        {
            //LinkedList

            LinkedList<int> list = new LinkedList<int>(
                new[] { 1, 2, 3, 4, 5 }
                );

            //Stack
            Stack<int> stack = new Stack<int>(
                new[] { 1, 5, 4, 2, 6, 5 });

            //Queue
            Queue<int> queue = new Queue<int>(
                new[] { 3, 2, 1, 4, 5 });

            //Search Item
            Console.WriteLine("Enter search element (1 - 10)");
            int searchitem = Convert.ToInt32(Console.ReadLine());

            //Convert to array for binary search
            int[] listarray = list.ToArray();
            int[] stackarray = stack.ToArray();
            Array.Sort(stackarray);
            int[] queuearray = queue.ToArray();
            Array.Sort(queuearray);

            //Jump Search for LinkedList
            bool foundlistitem = JumpSeach(listarray, searchitem);
            if (foundlistitem)
            {
                Console.WriteLine($"{searchitem} found in list");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in list");
            }

            //Jump Search for Stack
            bool foundstackitem = JumpSeach(stackarray, searchitem);
            if (foundstackitem)
            {
                Console.WriteLine($"{searchitem} found in stack");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in stack");
            }

            //Jump Search for Queue
            bool foundqueueitem = JumpSeach(queuearray, searchitem);
            if (foundqueueitem)
            {
                Console.WriteLine($"{searchitem} found in queue");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in queue");
            }

        }

        private static bool JumpSeach(int[] itemsarray, int searchitem)
        {
            int n = itemsarray.Length;
            int step = (int)Math.Floor(Math.Sqrt(n));
            int prev = 0;

            while (itemsarray[Math.Min(step, n) - 1] < searchitem)
            {
                prev = step;
                step += (int)Math.Floor(Math.Sqrt(n));
                if (prev >= n)
                    return false;
            }

            while (itemsarray[prev] < searchitem)
            {
                prev++;
                if (prev == Math.Min(step, n))
                    return false;
            }

            if (itemsarray[prev] == searchitem)
                return true;

            return false;
        }
    }

}
