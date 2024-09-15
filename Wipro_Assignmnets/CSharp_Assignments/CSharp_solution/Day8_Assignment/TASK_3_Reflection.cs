using System.Reflection;

namespace Day8_Assignment
{
    internal class TASK_3_Reflection
    {
        static void Main(string[] args)
        {
            try
            {
                // Load the assembly
                Assembly assembly = Assembly.LoadFrom("C:\\Users\\bonag\\OneDrive\\Documents\\Wipro\\C# Projects\\CSharp_solution\\Day4_Assignments\\obj\\Debug\\net8.0\\Day4_Assignments.dll");

                // List all types contained in the assembly
                foreach (Type type in assembly.GetTypes())
                {
                    Console.WriteLine($"Type: {type.FullName}");
                    Console.WriteLine($"Base Type: {type.BaseType}");

                    // List all interfaces implemented by the type
                    foreach (Type iface in type.GetInterfaces())
                    {
                        Console.WriteLine($"Interface: {iface.FullName}");
                    }

                    Console.WriteLine();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
    }
}



