namespace Day8_Assignment
{
    // Declare a delegate
    public delegate string IntToStringDelegate(int number);
    internal class TASK_1_Delegates
    {
        // Method to convert an integer to its string representation
        static string ConvertToString(int number)
        {
            return number.ToString();
        }

        // Method to print the integer
        static string PrintInteger(int number)
        {
            Console.WriteLine(number);
            return number.ToString(); // Return a string to match the delegate signature
        }

        static void Main(string[] args)
        {
            // Instantiate the delegate
            IntToStringDelegate intToString = new IntToStringDelegate(ConvertToString);

            // Convert a list of integers to their string representations
            Console.WriteLine("Enter integers separated by spaces:");
            string userInput = Console.ReadLine();
            string[] inputStrings = userInput.Split(' ');
            List<int> numbers = new List<int>();

            foreach (string input in inputStrings)
            {
                if (int.TryParse(input, out int number))
                {
                    numbers.Add(number);
                }
            }
            List<string> stringRepresentations = new List<string>();

            foreach (int number in numbers)
            {
                stringRepresentations.Add(intToString(number));
            }

            Console.WriteLine("Output of Single Cast Delegate: ");
            // Print the string representations
            foreach (string str in stringRepresentations)
            {
            
                Console.WriteLine(str);
            }

            // Modify the delegate to be multicast
            intToString += PrintInteger;

            Console.WriteLine("Output of MultiCast Delegate: ");
            // Demonstrate the multicast delegate
            foreach (int number in numbers)
            {
                intToString(number);
            }
        }
    }
}


