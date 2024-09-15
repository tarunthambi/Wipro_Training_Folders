namespace Day5_C__Collections_Algorithms.Collection
{
    internal class TestList
    {
        static void Main(string[] args)
        {
            List<int> intlist = new List<int>()
            {
                1,2,3, 4, 5, 6, 7, 8, 9, 10
            };

            Console.WriteLine("Count of items: " + intlist.Count);
            Console.WriteLine("Capacity of intlist: " + intlist.Capacity);
            Console.WriteLine("Contains 10?: " + intlist.Contains(10));

            Console.WriteLine();
            displayList(intlist);

            Console.WriteLine();
            displayList_Enumerable(intlist);

            Console.WriteLine();
            displayList_Enumerator(intlist);

            Console.ReadLine();

        }

        private static void displayList_Enumerator(List<int> intlist)
        {
            //IEnumerator
            IEnumerator<int> enumeratorList = intlist.GetEnumerator();
            while (enumeratorList.MoveNext())
            {
                Console.Write(enumeratorList.Current + " ");
            }
        }

        private static void displayList_Enumerable(List<int> intlist)
        {
            //IEnumerable
            IEnumerable<int> enumerableList = intlist;
            foreach (int i in enumerableList)
            {
                Console.Write(i + " ");
            }
        }

        private static void displayList(List<int> intlist)
        {
            //foreach
            int sum = 0;
            foreach (var i in intlist)
            {
                Console.Write(i + " ");
                sum += i;
            }
            Console.Write(" = " + sum);
        }
    }
}
