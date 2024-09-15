namespace Day4_Exceptions_File.Files
{
    internal class TestStream
    {
        static void Main(string[] args)
        {
            //WriteStream();
            ReadStream();

            Console.ReadLine();
        }

        private static void ReadStream()
        {
            StreamReader sr = null;
            try
            {
                sr = new StreamReader(@"D:\Example.txt");

                string data = sr.ReadToEnd();

                Console.WriteLine("Contents of the file are:");
                Console.WriteLine(data);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                if (sr != null)
                {
                    sr.Close();
                }
            }
        }

        private static void WriteStream()
        {
            StreamWriter sw = null;
            try
            {
                sw = new StreamWriter(@"D:\Example.txt", true);
                Console.WriteLine("Enter data to be written to the file");
                string str = Console.ReadLine();
                sw.WriteLine(str);
                sw.Flush();

                Console.WriteLine("Data is written to the file");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                if (sw != null)
                {
                    sw.Close();
                }
            }
        }
    }
}
