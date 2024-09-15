namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    internal class TestBubbleSort
    {
        static void Main(string[] args)
        {
            //Linked List
            LinkedList<int> list = new LinkedList<int>(
                new int[] { 4, 2, 1, 5, 3, 1, 9, 7, 8 }
                );

            TestBubbleSort.BubbleSort(list);
            Console.WriteLine("Sorted Linked List:");
            foreach (int i in list) Console.Write(i + " ");

            Console.WriteLine();

            //Stack
            Stack<double> stack = new Stack<double>(
                new double[] { 10.3, 8.0, 5.8, 7.1, 6, 9.3, 0.0 }
                );
            TestBubbleSort.BubbleSort(stack);
            Console.WriteLine("Sorted Stack Elements:");
            while (stack.Count > 0)
            {
                Console.Write(stack.Pop() + " ");
            }
            Console.WriteLine();

            //Queue
            Queue<int> queue = new Queue<int>(
                new int[] { 5, 3, 1, 2, 0, 7 }
                );
            TestBubbleSort.BubbleSort(queue);
            Console.WriteLine("Sorted Queue Elements");
            while (queue.Count > 0)
            {
                Console.Write(queue.Dequeue() + " ");
            }
            Console.WriteLine();
            Console.ReadLine();
        }

        private static void BubbleSort(Queue<int> queue)
        {
            List<int> list = new List<int>(queue);
            queue.Clear();
            bool swapped;
            do
            {
                swapped = false;
                for (int i = 0; i < list.Count - 1; i++)
                {
                    if (list[i] > list[i + 1])
                    {
                        //swapping
                        int temp = (int)list[i];
                        list[i] = list[i + 1];
                        list[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);

            //Reconstruct the queue           
            foreach (var item in list)
            {
                queue.Enqueue(item);
            }
        }

        private static void BubbleSort(Stack<double> stack)
        {
            List<double> list = new List<double>(stack);
            stack.Clear();
            bool swapped;
            do
            {
                swapped = false;
                for (int i = 0; i < list.Count - 1; i++)
                {
                    if (list[i] > list[i + 1])
                    {
                        //swapping
                        int temp = (int)list[i];
                        list[i] = list[i + 1];
                        list[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);

            //Reconstruct the stack since stack pops out the last element first
            list.Reverse();
            foreach (var item in list)
            {
                stack.Push(item);
            }
        }

        private static void BubbleSort(LinkedList<int> list)
        {
            bool swapped;
            do
            {
                swapped = false;
                var currentnode = list.First;

                while (currentnode.Next != null)
                {
                    if (currentnode.Value > currentnode.Next.Value)
                    {
                        //swap
                        int temp = currentnode.Value;
                        currentnode.Value = currentnode.Next.Value;
                        currentnode.Next.Value = temp;
                        swapped = true;
                    }
                    currentnode = currentnode.Next;
                }
            } while (swapped);
        }
    }
}
