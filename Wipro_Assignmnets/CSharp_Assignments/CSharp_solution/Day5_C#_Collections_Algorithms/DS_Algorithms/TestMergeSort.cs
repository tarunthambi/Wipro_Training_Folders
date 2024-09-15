namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    internal class TestMergeSort
    {
        static void Main(string[] args)
        {
            int[] array = { 13, 11, 12, 5, 7, 6, 4 };

            MergeSort(array, 0, array.Length - 1);

            Console.WriteLine("Sorted Array Elements:");
            PrintMergedSortedArray(array);

            Console.WriteLine();

            Console.ReadLine();
        }

        //Main function for merge sort
        private static void MergeSort(int[] array, int left, int right)
        {
            if (left < right)
            {
                //Mid Element
                int middle = (left + right) / 2;
                Console.WriteLine("Middle: " + middle);
                Console.WriteLine("Left: " + left);
                Console.WriteLine("Right: " + right);

                //Recursively sort the first and second halves
                MergeSort(array, left, middle);
                MergeSort(array, middle + 1, right);

                //Merge the sorted halves
                Merge(array, left, middle, right);
            }
        }

        //Merge 2 subarrays
        // First Subarray is array [left...middle]
        // Second Subarray is array[middle+1...right]
        private static void Merge(int[] array, int left, int middle, int right)
        {
            // Get the size
            int size1 = middle - left + 1;
            Console.WriteLine("Size of left: " + size1);

            int size2 = right - middle;
            Console.WriteLine("Size of right: " + size2);

            //Temp Arrays
            int[] leftarray = new int[size1];
            int[] rightarray = new int[size2];

            //Copy data to the temp arrays
            Array.Copy(array, left, leftarray, 0, size1);
            Array.Copy(array, middle + 1, rightarray, 0, size2);

            //Initial Index of the first and second subarray
            int i = 0; //left array index
            int j = 0; //right array index

            //Initial Index of the merged subarray
            int k = left;

            //Merge the temp arrays back into array [left..right]
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

            //Copy the remaining elements of leftarray, if any
            while (i < size1)
            {
                array[k] = leftarray[i];
                i++;
                k++;
            }

            //Copy the remaining elements of rightarray, if any
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
