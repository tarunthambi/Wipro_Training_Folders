namespace utility_dll
{
    public class currency_converter
    {
        public static double ConvertPoundsToRupees(double x)
        {
            return (x * 108.56);
        }
        public static double ConvertDollarsToRupees(double x)
        {
            return (x * 83.51);
        }
    }
}
