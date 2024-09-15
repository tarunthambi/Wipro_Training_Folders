using System.Collections;

namespace Day5_C__Collections_Algorithms.Collection
{
    internal class TestHashtable
    {
        static void Main(string[] args)
        {
            Hashtable hashtable = new Hashtable()
            {
                {1,"One" },
                {"Two",2 },
                {3,"Three" },
                {4.0,"Foure" },
                {"Five",5.0 }
            };

            foreach (DictionaryEntry item in hashtable)
            {
                Console.Write(item.Key + " " + item.Value);
                Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
