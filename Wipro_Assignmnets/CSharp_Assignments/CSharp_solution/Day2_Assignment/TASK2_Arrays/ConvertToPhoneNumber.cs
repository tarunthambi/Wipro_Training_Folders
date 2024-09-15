namespace Day2_Assignment.TASK2_Arrays
{
    internal class ConvertToPhoneNumber
    {
        static void Main(string[] args)
        {
            // converting into phone number form
            
            int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 7 };
            string phonenumber = ConvertToPhoneNumberr(numbers);
            Console.WriteLine("Phone Number: " + phonenumber);
        }
        public static string ConvertToPhoneNumberr(int[] num)
        {
            if (num.Length != 10)
            {
                return ("Array must contain 10 numbers");
            }
            return $"({num[0]}{num[1]}{num[2]}) {num[3]}{num[4]}{num[5]}-{num[6]}{num[7]}{num[8]}{num[9]}";
        }
    }
}
