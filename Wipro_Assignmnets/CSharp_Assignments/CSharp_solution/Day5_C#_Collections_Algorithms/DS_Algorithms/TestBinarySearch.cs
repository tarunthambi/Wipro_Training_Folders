namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    internal class TestBinarySearch
    {
        static void Main(string[] args)
        {
            //Linked List
            LinkedList<int> list = new LinkedList<int>(
                new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });

            //Stack
            Stack<int> stack = new Stack<int>(
                new[] { 1, 2, 3, 4, 5, 6, 8 }
                );

            //Queue
            Queue<int> queue = new Queue<int>(
                new int[] { 1, 2, 3, 4, 5, 6, 8 });

            //Search Item
            Console.WriteLine("Enter search element (1 - 10)");
            int searchitem = Convert.ToInt32(Console.ReadLine());

            //Convert to array for binary search
            int[] listarray = list.ToArray();
            int[] stackarray = stack.ToArray();
            Array.Reverse(stackarray);
            int[] queuearray = queue.ToArray();

            //Binary Search for LinkedList
            bool foundlistitem = BinarySeach(listarray, searchitem);
            if (foundlistitem)
            {
                Console.WriteLine($"{searchitem} found in list");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in list");
            }

            //Binary Search for Stack
            bool foundstackitem = BinarySeach(stackarray, searchitem);
            if (foundstackitem)
            {
                Console.WriteLine($"{searchitem} found in stack");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in stack");
            }

            //Binary Search for Queue
            bool foundqueueitem = BinarySeach(queuearray, searchitem);
            if (foundqueueitem)
            {
                Console.WriteLine($"{searchitem} found in queue");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in queue");
            }

        }

        private static bool BinarySeach(int[] itemsarray, int searchitem)
        {
            int left = 0;
            int right = itemsarray.Length - 1;
            while (left <= right)
            {
                int mid = left + (right - left) / 2;
                //Console.WriteLine("Mid Value:" + mid);

                if (itemsarray[mid] == searchitem)
                    return true;

                if (itemsarray[mid] < searchitem)
                {
                    left = mid + 1;
                    //Console.WriteLine("Left = " + left + " " + "Right = " + mid);
                }
                else
                {
                    right = mid - 1;
                    //Console.WriteLine("Left = " + left + " " + "Right = " + mid);
                }
            }
            return false;

        }
    }
}
