using System.Reflection;

namespace Day8_Assignment
{
    internal class TASK_4_Types_at_Runtime
    {
        static void Main(string[] args)
        {
            Assembly assembly = Assembly.LoadFrom("C:\\Users\\bonag\\OneDrive\\Documents\\Wipro\\C# Projects\\CSharp_solution\\Day4_Assignments\\bin\\Debug\\net8.0\\Day4_Assignments.dll");

            Type[] types = assembly.GetTypes();

            Console.WriteLine("List of types in Day4_Assignment:");

            foreach (Type t in types)
            {
                Console.WriteLine("");
                Console.WriteLine("Name = " + t.Name);

                PropertyInfo[] propertyInfos = t.GetProperties();
                foreach (PropertyInfo propinfo in propertyInfos)
                {
                    Console.WriteLine("Property Name = " + propinfo.Name);
                    Console.WriteLine("Property Type = " + propinfo.PropertyType);
                }

                FieldInfo[] fields = t.GetFields();
                foreach (FieldInfo fieinfo in fields)
                {
                    Console.WriteLine("Field Name = " + fieinfo.Name);
                }
            }
        }    
    }
}
