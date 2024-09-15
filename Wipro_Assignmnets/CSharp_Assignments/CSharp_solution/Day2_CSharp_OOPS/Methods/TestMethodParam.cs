namespace Day2_CSharp_OOPS.Methods
{
    internal class TestMethodParam
    {
        public static void AverageScore(int empid, string name, int count,int[] scores)
        {
            int sum = 0;
            float average;
            foreach (var score in scores)
            {
                sum += score;
            }
            average = sum / count;

            Console.WriteLine($"Emp Id : {empid}");
        }
        static void Main(string[] args)
        {
            //AverageScore();
        }

    }
}
