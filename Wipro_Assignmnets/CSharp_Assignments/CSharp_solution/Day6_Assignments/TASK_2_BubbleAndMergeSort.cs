//Bubble Sort:    
//    Time Complexity: O(n ^ 2).
//    Space Complexity: O(1).
//Merge Sort:
//    Time Complexity: O(n log n).
//    Space Complexity: O(n).

//Bubble Sort can be used for small or nearly sorted datasets due to its simplicity.
//Merge Sort is useful for larger datasets where a more efficient sort is needed.

namespace Day6_Assignments
{
    internal class TASK_2_BubbleAndMergeSort
    {
        static void Main(string[] args)
        {
            LinkedList<int> list = new LinkedList<int>(
                new int[] { 4, 2, 1, 5, 3, 1, 9, 7, 8 }
                );

            TASK_2_BubbleAndMergeSort.BubbleSort(list);
            Console.WriteLine("---------- Using Bubble Sort -----------");
            Console.WriteLine("Sorted Linked List:");
            foreach (int i in list) Console.Write(i + " ");

            Console.WriteLine();
            Console.WriteLine();


            int[] array = { 13, 11, 12, 5, 7, 6, 4 };

            MergeSort(array, 0, array.Length - 1);
            Console.WriteLine("---------- Using Merge Sort -----------");
            Console.WriteLine("Sorted Array Elements:");
            PrintMergedSortedArray(array);

            Console.WriteLine();

            Console.ReadLine();
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
                        int temp = currentnode.Value;
                        currentnode.Value = currentnode.Next.Value;
                        currentnode.Next.Value = temp;
                        swapped = true;
                    }
                    currentnode = currentnode.Next;
                }
            } while (swapped);
        }

        private static void MergeSort(int[] array, int left, int right)
        {
            if (left < right)
            {
                int middle = (left + right) / 2;

                MergeSort(array, left, middle);
                MergeSort(array, middle + 1, right);

                Merge(array, left, middle, right);
            }
        }

        private static void Merge(int[] array, int left, int middle, int right)
        {
            int size1 = middle - left + 1;

            int size2 = right - middle;

            int[] leftarray = new int[size1];
            int[] rightarray = new int[size2];

            Array.Copy(array, left, leftarray, 0, size1);
            Array.Copy(array, middle + 1, rightarray, 0, size2);

            int i = 0; 
            int j = 0; 

            int k = left;

            while (i < size1 && j < size2)
            {
                if (leftarray[i] <= rightarray[j])
                {
                    array[k] = leftarray[i];
                    i++;
                }
                else
                {
                    array[k] = rightarray[j];
                    j++;
                }
                k++;
            }

            while (i < size1)
            {
                array[k] = leftarray[i];
                i++;
                k++;
            }

            while (j < size2)
            {
                array[k] = rightarray[j];
                j++;
                k++;
            }
        }

        private static void PrintMergedSortedArray(int[] array)
        {
            foreach (var item in array)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
        }
    }
}
