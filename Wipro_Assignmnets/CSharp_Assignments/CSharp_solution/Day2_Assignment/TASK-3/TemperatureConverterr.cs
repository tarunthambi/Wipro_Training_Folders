    namespace Day2_Assignment.TASK_3
{
    internal class TemperatureConverterr
    {
        public static void Main(string[] args)
        {
            // Converting the temperature values to Celsius or Fahrenheit
            TemperatureConverter();
        }

        public static void TemperatureConverter()
        {
            Console.WriteLine("Choose one of the options (enter the number):");
            Console.WriteLine("1. Centigrade to Fahrenheit");
            Console.WriteLine("2. Fahrenheit to Centigrade");
            int option = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the temperature value:");
            double value = Convert.ToDouble(Console.ReadLine());

            switch (option)
            {
                case 1:
                    CentigradeToFahrenheit(value);
                    break;
                case 2:
                    FahrenheitToCentigrade(value);
                    break;
                default:
                    Console.WriteLine("Invalid Choice");
                    break;
            }

            Console.WriteLine("Would you like to continue? (Type yes/no)");
            string yesno_inp = Console.ReadLine();
            if (yesno_inp.ToLower() == "yes")
            {
                Console.WriteLine();
                TemperatureConverter();
            }
        }

        public static void CentigradeToFahrenheit(double value)
        {
            double fahrenheit = (value * 9 / 5) + 32;
            Console.WriteLine($"{value}°C is equal to {fahrenheit}°F");
        }

        public static void FahrenheitToCentigrade(double value)
        {
            double centigrade = (value - 32) * 5 / 9;
            Console.WriteLine($"{value}°F is equal to {centigrade}°C");
        }
    }
}
