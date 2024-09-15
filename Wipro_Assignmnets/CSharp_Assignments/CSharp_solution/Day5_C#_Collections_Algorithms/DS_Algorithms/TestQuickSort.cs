namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    internal class TestQuickSort
    {
        static void Main(string[] args)
        {
            //Linked List
            LinkedList<int> list = new LinkedList<int>(
                new int[] { 4, 2, 1, 5, 3, 1, 9, 7, 8 }
                );
            TestQuickSort.QuickSort(list);
            Console.WriteLine("Sorted List Elements:");
            foreach (var item in list)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
            Console.ReadLine();
        }

        private static void QuickSort(LinkedList<int> list)
        {
            int[] array = new int[list.Count];
            list.CopyTo(array, 0);

            QuickSort(array, 0, array.Length - 1);

            list.Clear();
            foreach (var item in array)
            {
                list.AddLast(item);
            }
        }

        private static void QuickSort(int[] array, int low, int high)
        {
            if (low < high)
            {
                int part = Partition(array, low, high);
                QuickSort(array, low, part - 1);
                QuickSort(array, part + 1, high);
            }
        }

        private static int Partition(int[] array, int low, int high)
        {
            int pivot = array[high];
            int i = (low - 1); //i=-1

            for (int j = low; j <= high; j++)
            {
                if (array[j] < pivot)
                {
                    i++;
                    Swap(array, i, j);
                }
            }
            Swap(array, i + 1, high);
            return i + 1;
        }

        private static void Swap(int[] array, int i, int j)
        {
            //swap
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
