namespace Day2_CSharp_OOPS.Methods
{
    internal class TestCalcWithOut
    {
        static void Main(string[] args)
        {
            int addres, subres, multiplyres;
            Console.WriteLine("Enter two positive numbers:");

        }
        public static void Calc(int n1, int n2, out int resadd, out int ressub, out int resmultiply)
        {
            resadd = n1+n2;
            ressub = n1-n2;
            resmultiply = n1*n2;
        }
    }
}
