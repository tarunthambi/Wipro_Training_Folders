namespace Day2_Assignment.TASK_3
{
    internal class PasswordValidation
    {
        static void Main(string[] args)
        {
            // Checking whether the password is valid or not
            Console.WriteLine("Enter the password below to check validation (min length is 6): ");
            string pass_str = Console.ReadLine();
            if (pass_str.Length < 6)
            {
                Console.WriteLine("Password length is less than 6. It's Invalid. Try Again");
            }

            bool isvalid = PasswordChecker(pass_str);
            if (isvalid)
            {
                Console.WriteLine("Password is Valid");
            }
            else
            {
                Console.WriteLine("Password is invalid.\nThe password didn't passed with the specific requirments");
            }
        }
        public static bool PasswordChecker(string password)
        {
            if (password.Length < 6)
            {
                return false;
            }
            bool hasUppercase = password.Any(char.IsUpper);
            bool hasLowercase = password.Any(char.IsLower);
            bool hasDigit = password.Any(char.IsDigit);
            bool hasSpecialCharacter = password.Any(ch => "@#$!*".Contains(ch));

            Console.WriteLine();
            return hasUppercase && hasLowercase && hasDigit && hasSpecialCharacter;
        }
    }
}
