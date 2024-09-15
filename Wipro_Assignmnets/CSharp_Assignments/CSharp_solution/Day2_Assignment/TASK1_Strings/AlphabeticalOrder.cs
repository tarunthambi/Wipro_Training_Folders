namespace Day2_Assignment.TASK1_Strings
{
    internal class AlphabeticalOrder
    {
        static void Main(string[] args)
        {
            // Arranging letters in the given string in alphabetical order
            Console.WriteLine("Enter the string: ");
            string b = Console.ReadLine();
            string a = AlphabeticalOrderr(b);
            Console.WriteLine("Alphabetically ordered string: " + a);
        }
        public static string AlphabeticalOrderr(string input)
        {
            if (input == null)
            {
                return ("Input is a null value.Try Again");
            }

            Console.WriteLine("Given input: " + input);
            char[] c = input.ToCharArray();
            int n = c.Length;
            for (int i = 0; i < n; i++)
            {
                for (int j = i + 1; j < n; j++)
                {
                    if (c[i] > c[j])
                    {
                        char temp = c[i];
                        c[i] = c[j];
                        c[j] = temp;
                    }
                }
            }
            string output = new string(c);
            return output;
        }
    }
}
