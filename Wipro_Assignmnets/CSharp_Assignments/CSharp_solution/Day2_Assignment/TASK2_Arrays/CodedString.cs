using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day2_Assignment.TASK2_Arrays
{
    internal class CodedString
    {
        static void Main(string[] args)
        {
            // converting into coded string
            Console.WriteLine("Enter the string to be coded: ");
            string str1 = Console.ReadLine();
            string input_str = str1;
            Console.WriteLine("Input String: " + input_str);
            Console.WriteLine();
            string codestring = CodedStringg(input_str);
            Console.WriteLine("Coded String: " + codestring);
        }
        public static string CodedStringg(string input)
        {
            if (input == null)
            {
                return ("Input is a null value");
            }

            string lowercaseString = input.ToLower();
            char[] output = new char[input.Length];
            for (int i = 0; i < input.Length; i++)
            {
                switch (input[i])
                {
                    case 'a':
                        output[i] = '4';
                        break;
                    case 'e':
                        output[i] = '3';
                        break;
                    case 'i':
                        output[i] = '1';
                        break;
                    case 'o':
                        output[i] = '0';
                        break;
                    case 's':
                        output[i] = '5';
                        break;
                    default:
                        output[i] = input[i];
                        break;
                }
            }
            return new string(output);
        }
    }
}
