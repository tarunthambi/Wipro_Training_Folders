namespace Day4_Exceptions_File.Files
{
    internal class TestBinary
    {
        static void Main(string[] args)
        {
            string path = "BinaryFile.txt";
            //WriteBinary(path);
            ReadBinary(path);

            Console.ReadLine();
        }

        private static void ReadBinary(string path)
        {
            BinaryReader binaryReader = null;
            try
            {
                binaryReader = new BinaryReader(File.Open(path, FileMode.Open, FileAccess.Read));
                int int_data = binaryReader.ReadInt32();
                double double_data = binaryReader.ReadDouble();
                string string_data = binaryReader.ReadString();
                bool bool_data = binaryReader.ReadBoolean();
                char char_data = binaryReader.ReadChar();

                Console.WriteLine("Contents of the file are:");
                Console.WriteLine("Int: " + int_data);
                Console.WriteLine("Double: " + double_data);
                Console.WriteLine("String: " + string_data);
                Console.WriteLine("Boolean: " + bool_data);
                Console.WriteLine("Char: " + char_data);


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                if (binaryReader != null)
                    binaryReader.Close();
            }
        }

        private static void WriteBinary(string path)
        {
            BinaryWriter binaryWriter = null;
            try
            {
                binaryWriter = new BinaryWriter(File.Open(path, FileMode.Append, FileAccess.Write));
                binaryWriter.Write(100);
                binaryWriter.Write(100.50);
                binaryWriter.Write("Binary Data");
                binaryWriter.Write(true);
                binaryWriter.Write('A');

                Console.WriteLine("Binary data written to the file");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                if (binaryWriter != null)
                    binaryWriter.Close();
            }
        }
    }
}
