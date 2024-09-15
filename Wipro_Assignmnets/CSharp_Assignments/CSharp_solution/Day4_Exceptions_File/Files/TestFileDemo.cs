namespace Day4_Exceptions_File.Files
{
    internal class TestFileDemo
    {
        static void Main(string[] args)
        {
            string filename = "Example.txt";

            //Create a File and Write to the File
            //CreateAndWriteFile(filename);

            //Read from the file
            //ReadFile(filename);

            //Delete the file
            DeleteFile(filename);

            Console.ReadLine();
        }

        private static void DeleteFile(string filename)
        {
            if (File.Exists(filename))
            {
                File.Delete(filename);
                Console.WriteLine("File deleted successfully");
            }
            else
            {
                Console.WriteLine("File Not Found");
            }
        }

        private static void ReadFile(string filename)
        {
            //using (StreamReader sr = File.OpenText(filename))
            //{
            TextReader sr = null;
            try
            {
                sr = File.OpenText(filename);
                //sr=new StreamReader(filename);
                string s;
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
            }
            catch (FileNotFoundException ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                if (sr != null) sr.Close();
            }
            //}
        }

        private static void CreateAndWriteFile(string filename)
        {

            StreamWriter sw = null;
            try
            {
                sw = File.CreateText(filename);
                sw.WriteLine("This is an example text file.");
                sw.WriteLine("Hello User");
                Console.WriteLine("File Created");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                sw.Close();
            }
        }
    }
}
