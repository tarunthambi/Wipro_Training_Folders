namespace Day1_CSharpBasic.Arrays
{
    internal class TestSingleDimArray
    {

        static void Main(string[] args)
        {
            // Boxing - Value to Reference Type
            // Unboxing - Reference to Value Type

            int i = (int)30.5;
            Console.WriteLine("i = " + i);

            int x = 100;
            object y = x; //Boxing
            int z = (int)y; //Unboxing


            // Declaring and initializing the arrays
            intArray();
            doubleArray();
            stringArray();
            boolArray();
            Console.ReadLine();
        }

        private static void boolArray()
        {
            // bool array
            bool[] flag = { true, false };
            foreach (bool b in flag)
            {
                Console.Write(b + " ");
            }
        }

        private static void stringArray()
        {


            // string array
            string[] programs = new string[] { "c#", "sql", "angular" };
            foreach (object s in programs)
            {
                Console.Write(s.ToString().ToUpper() + " ");
            }
            Console.WriteLine();
        }

        private static void doubleArray()
        {
            // double array
            double[] scores = new double[4] { 89.4, 75.0, 95.10, 77.0 };
            Array.Sort(scores);
            foreach (double i in scores)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();
        }

        private static void intArray()
        {
            // int array
            int[] numbers = new int[5];
            numbers[0] = 10;
            numbers[1] = 20;
            numbers[2] = 30;
            numbers[3] = 40;
            numbers[4] = 50;

            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write(numbers[i] + " ");
            }
            Console.WriteLine();
        }
    }
}

