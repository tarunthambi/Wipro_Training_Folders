using System.Collections;

namespace Day5_C__Collections_Algorithms.Collection
{
    internal class TestArrayList
    {
        static void Main(string[] args)
        {
            //ArrayList items = new ArrayList();

            //items.Add(1);
            //items.Add(2);
            //items.Add("Hello");
            //items.Add(1.4);
            //items.Add(true);
            //items.Add(1.5f);

            ArrayList list = new ArrayList();
            for (int i = 0; i < 10; i++)
            {
                list.Add(i + 1);
            }

            int sum = 0;
            foreach (int item in list)
            {
                sum += item;
                //sum += (int)item;
            }
            Console.WriteLine("Sum = " + sum);

            Console.WriteLine();

            //Collection Initializer
            ArrayList items = new ArrayList()
            {
                1,2,"Hello",1.4,true,1.5f
            };

            Console.WriteLine("Count of items: " + items.Count);
            Console.WriteLine("Capacity of ArrayList: " + items.Capacity);
            Console.WriteLine("Index Of 1: " + items.IndexOf(1));
            Console.WriteLine("Contains Hello: " + items.Contains("Hello"));

            Console.WriteLine();
            displayItems(items);

            Console.WriteLine();
            displayItems_IEnumerable(items);

            items.Insert(1, "Hi");
            items.Remove(1.5f);

            Console.WriteLine();
            displayItems_IEnumerator(items);
            Console.Read();

        }

        private static void displayItems_IEnumerator(ArrayList items)
        {
            //IEnumerator
            IEnumerator enumerateItems1 = items.GetEnumerator();
            while (enumerateItems1.MoveNext())
            {
                Console.Write(enumerateItems1.Current + " ");
            }
        }

        private static void displayItems_IEnumerable(ArrayList items)
        {
            //IEnumerable
            IEnumerable enumerateItems = items;
            foreach (var item in enumerateItems)
            {
                Console.Write(item + " ");
            }
        }

        private static void displayItems(ArrayList items)
        {
            //foreach loop
            foreach (object i in items) Console.Write(i + " ");
        }
    }
}
