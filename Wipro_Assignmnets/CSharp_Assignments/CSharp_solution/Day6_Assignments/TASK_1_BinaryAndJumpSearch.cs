//Binary Search requires random access to elements, which is not efficient in LinkedList due to its sequential access nature. 
//Jump Search is more suited for LinkedLists since it involves jumping ahead by fixed steps and then performing a linear search.

namespace Day6_Assignments
{
    internal class TASK_1_BinaryAndJumpSearch
    {
        static void Main(string[] args)
        {
            LinkedList<int> b_list = new LinkedList<int>(
                new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });

            Console.WriteLine(" ----- Using Binary Search -------");
            Console.WriteLine("Enter search element (1 - 10) ");
            int searchitem = Convert.ToInt32(Console.ReadLine());

            int[] listarray = b_list.ToArray();

            bool foundlistitem = BinarySeach(listarray, searchitem);
            if (foundlistitem)
            {
                Console.WriteLine($"{searchitem} found in list");
            }
            else
            {
                Console.WriteLine($"{searchitem} not found in list");
            }

            LinkedList<int> j_list = new LinkedList<int>(
                new[] { 1, 2, 3, 4, 5 });

            Console.WriteLine(" ----- Using Jump Search -------");
            Console.WriteLine("Enter search element (1 - 10)");
            int searchitem1 = Convert.ToInt32(Console.ReadLine());

            int[] listarray1 = j_list.ToArray();

            bool foundlistitem1 = JumpSeach(listarray, searchitem1);
            if (foundlistitem)
            {
                Console.WriteLine($"{searchitem1} found in list");
            }
            else
            {
                Console.WriteLine($"{searchitem1} not found in list");
            }
        }

        private static bool BinarySeach(int[] itemsarray, int searchitem)
        {
            int left = 0;
            int right = itemsarray.Length - 1;
            while (left <= right)
            {
                int mid = left + (right - left) / 2;

                if (itemsarray[mid] == searchitem)
                    return true;

                if (itemsarray[mid] < searchitem)
                {
                    left = mid + 1;
                }
                else
                {
                    right = mid - 1;
                }
            }
            return false;
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

