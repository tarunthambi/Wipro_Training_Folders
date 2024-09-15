namespace Day2_Assignment.TASK1_Strings
{
    internal class UppercaseFirstLetter
    {
        static void Main(string[] args)
        {
            // Converting the first letter of word to upper case
            Console.WriteLine("Enter a string to upper case first letter:");
            string inp = Console.ReadLine();
            string a = UppercaseFirstLetterr(inp);
            Console.WriteLine("Title cased string: " + a);
        }

        public static string UppercaseFirstLetterr(string input)
        {
            if (input.Length == 0)
            {
                return "Input is null or empty. Please try again.";
            }

            string[] words = input.Split(' ');
            for (int i = 0; i < words.Length; i++)
            {
                if (words.Length!=0)
                {
                    words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1).ToLower();
                }
            }
            return string.Join(" ", words);
        }

    }
}       