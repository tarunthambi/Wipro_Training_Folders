namespace Day2_CSharp_OOPS
{
    internal class Program
    {
        public static void Main()
        {
            // Converting into coded strings
            string input = "Sharp is cool";
            string codedString = CodedString(input);
            Console.WriteLine(codedString);
        }
        public static string CodedString(string input)
        {
            input = input.ToLower();

            char[] result = new char[input.Length];

            for (int i = 0; i < input.Length; i++)
            {
                switch (input[i])
                {
                    case 'a':
                        result[i] = '4';
                        break;
                    case 'e':
                        result[i] = '3';
                        break;
                    case 'i':
                        result[i] = '1';
                        break;
                    case 'o':
                        result[i] = '0';
                        break;
                    case 's':
                        result[i] = '5';
                        break;
                    default:
                        result[i] = input[i];
                        break;
                }
            }

            return new string(result);
        }
    }
}

//    int[] numbers = GetPhoneNumberFromUser();
//    string formattedPhoneNumber = FormatPhoneNumber(numbers);
//    Console.WriteLine("Formatted Phone Number: " + formattedPhoneNumber);


//    Console.WriteLine("Enter 10 single-digit numbers (0-9) separated by commas to form a phone number:");

//    string input = Console.ReadLine();
//    string[] inputs = input.Split(',');

//    if (inputs.Length != 10)
//    {
//        throw new ArgumentException("You must enter exactly 10 numbers.");
//    }

//{
//    if (numbers == null)
//    {
//        return ("The array cannot be null.");
//    }

//    if (numbers.Length != 10)
//    {
//        return ("The array must contain exactly 10 numbers.");
//    }

//    foreach (int number in numbers)
//    {
//        if (number < 0 || number > 9)
//        {
//            return ("The array must contain only single-digit numbers (0-9).");
//        }
//    }

//    // Format the numbers as a phone number
//    string phoneNumber = String.Format("({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}",
//                                       numbers[0], numbers[1], numbers[2],
//                                       numbers[3], numbers[4], numbers[5],
//                                       numbers[6], numbers[7], numbers[8], numbers[9]);

//    return phoneNumber;
//}


