using System.Reflection;

namespace Day8_Assignment
{
    internal class TASK_5_InvokingMethodsDynamically
    {
        public static void Main(string[] args)
        {
            try
            {
                Assembly assembly = Assembly.LoadFrom("C:\\Users\\bonag\\OneDrive\\Documents\\Wipro\\C# Projects\\CSharp_solution\\Day2_Assignment\\bin\\Debug\\net8.0\\Day2_Assignment.dll");

                Type[] types = assembly.GetTypes();
                Type type = types[7]; 

                Console.WriteLine("Available methods in " + type.Name);
                MethodInfo[] methods = type.GetMethods();

                foreach (MethodInfo m in methods)
                {
                    Console.WriteLine(m.Name);
                }

                Console.WriteLine("Enter a method name to invoke:");
                string methodName = Console.ReadLine();

                MethodInfo method = type.GetMethod(methodName);

                if (method == null)
                {
                    Console.WriteLine("Method not found.");
                    return;
                }

                object instance = Activator.CreateInstance(type);

                // Get the method parameters
                ParameterInfo[] parameters = method.GetParameters();
                Console.WriteLine("The parameters and their types are: ");
                foreach (var parm in parameters)
                {
                    Console.WriteLine(parm);
                }
                Console.WriteLine();
                object[] parameterValues = new object[parameters.Length];

                // Asking the user to give input values for each parameter
                for (int i = 0; i < parameters.Length; i++)
                {
                    Console.WriteLine($"Enter a value for parameter '{parameters[i].Name}':");
                    string input = Console.ReadLine();
                    parameterValues[i] = Convert.ChangeType(input, parameters[i].ParameterType);
                }

                object result = method.Invoke(instance, parameterValues);

                Console.WriteLine(result?.ToString() ?? "Method invoked successfully.");
            }
            catch (TargetInvocationException ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }
        }
    }
}


