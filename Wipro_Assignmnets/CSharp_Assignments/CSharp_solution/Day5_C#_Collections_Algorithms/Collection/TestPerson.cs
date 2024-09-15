namespace Day5_C__Collections_Algorithms.Collection
{
    //IComparable implements CompareTo method that takes a reference type as a
    //Parameter and returns an integer

    /*
     * < 0 - The current instance precedes the object specified by the CompareTo method
     * > 0 - The current instance follows the object specified by the CompareTo method
     * = 0 - Both current instance and the passed instance are in same position
    */
    class Person : IComparable
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int YearsOfExp { get; set; }

        public int CompareTo(object? obj)
        {
            if (!(obj is Person))
            {
                throw new ArgumentException("Compared Object is not of Person");
            }
            Person person = (Person)obj;
            return Name.CompareTo(person.Name);
        }
    }

    class AgeComparer : IComparer<Person>
    {
        public enum SortBy { Age, Exp }
        public SortBy compareField = SortBy.Age;
        public int Compare(Person? person1, Person? person2)
        {
            switch (compareField)
            {
                case SortBy.Age:
                    return person1.Age.CompareTo(person2?.Age);
                    break;
                case SortBy.Exp:
                    return person1.YearsOfExp.CompareTo(person2?.YearsOfExp);
                    break;
            }
            return person1.Age.CompareTo(person2.Age);
        }
    }

    internal class TestPerson
    {
        static void Main(string[] args)
        {
            Person[] persons = new Person[]
            {
                new Person(){Name="Clara",Age=30,YearsOfExp=5},
                new Person(){Name="Austin",Age=31,YearsOfExp=4},
                new Person(){Name="Bennett",Age=28,YearsOfExp=10},
                new Person(){Name="clara",Age=35,YearsOfExp=15},
                new Person(){Name="Evan",Age=32,YearsOfExp=7},
            };

            //Sort By Name
            Console.WriteLine("Sorting Person By Name");
            Array.Sort(persons);

            Array.ForEach(persons, person => Console.WriteLine(person.Name));

            //foreach (var person in persons)
            //{
            //    Console.WriteLine(person.Name);
            //}

            Console.WriteLine();
            //Sort By Age
            Console.WriteLine("Sorting Person by Age");
            var ageComaparer = new AgeComparer();
            ageComaparer.compareField = AgeComparer.SortBy.Age;

            Array.Sort(persons, ageComaparer);
            Array.ForEach(persons, (person) => Console.WriteLine(person.Name + " " + person.Age + " " + person.YearsOfExp));

            Console.Read();
        }
    }
}
