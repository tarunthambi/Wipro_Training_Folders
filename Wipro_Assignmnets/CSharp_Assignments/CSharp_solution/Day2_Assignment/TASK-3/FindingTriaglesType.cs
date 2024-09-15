namespace Day2_Assignment.TASK_3
{
    internal class FindingTriaglesType
    {
        static void Main(string[] args)
        {
            // Finding the type of a traingle
            Console.WriteLine("Enter three sides of a triangle");
            Console.WriteLine("Enter side 1 ->");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter side 2 ->");
            int b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter side 3 ->");
            int c = Convert.ToInt32(Console.ReadLine());

            string output = FindingTraingleType(a, b, c);
            Console.WriteLine(output);

        }
        public static string FindingTraingleType(int a, int b, int c)
        {
            if (a == b && b == c && c == a)
            {
                return ("Traingle is a Equlateral triangle");
            }
            else if (a == b || b == c || c == a)
            {
                return ("Traingle is a Isosceles triangle");
            }
            else if (a != b && b != c && c != a)
            {
                return ("Traingle is a Scalene triangle");
            }
            return null;
        }
    }
}
