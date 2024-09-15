namespace Day8_Assignment
{
    // Declared a generic delegate
    public delegate T Transformer<T>(T input);
    internal class TASK_2_Generic_Delegates
    {
        static int DoubleInt(int x)
        {
            return x * 2;
        }
        static string ToUpperCase(string s)
        {
            return s.ToUpper();
        }
        static float SquareFloat(float f)
        {
            return f * f;
        }
        static double HalfDouble(double d)
        {
            return d / 2.0;
        }

        static void Main(string[] args)
        {
            // Instantiate the generic delegate for different types
            Transformer<int> intTransformer = new Transformer<int>(DoubleInt);
            Transformer<string> stringTransformer = new Transformer<string>(ToUpperCase);
            Transformer<float> floatTransformer = new Transformer<float>(SquareFloat);
            Transformer<double> doubleTransformer = new Transformer<double>(HalfDouble);

            // Demonstrate the transformations
            Console.WriteLine("Enter the INTEGER for Multiplying: ");
            int int_input = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Output: {intTransformer(int_input)}");
            Console.WriteLine();

            Console.WriteLine("Enter the STRING to Convert into Uppercase: ");
            string str_input = Console.ReadLine();
            Console.WriteLine($"Output: {stringTransformer(str_input)}");
            Console.WriteLine();

            Console.WriteLine("Enter the FLOAT value to Square it: ");
            string floatInput = Console.ReadLine();
            if (float.TryParse(floatInput, out float floatValue))
            {
                Console.WriteLine($"Output: {floatTransformer(floatValue)}");
            };
            Console.WriteLine();

            Console.WriteLine("Enter the value to convert the DOUBLE value into Half: ");
            double double_input = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine($"Output: {doubleTransformer(double_input)}");
            Console.WriteLine();
        }
    }
}



