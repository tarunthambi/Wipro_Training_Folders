using System;

namespace AgeGroupClassification
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool continueProgram = true;

            while (continueProgram)
            {
                int age;
                bool validInput = false;

                
                while (!validInput)
                {
                    Console.WriteLine("Enter your age:");

                    
                    string input = Console.ReadLine();

                    
                    if (int.TryParse(input, out age) && age >= 0)
                    {
                        validInput = true; 

                        
                        if (age <= 12)
                        {
                            Console.WriteLine($"Age {age} falls in the Child category (0 - 12 years).");
                        }
                        else if (age <= 19)
                        {
                            Console.WriteLine($"Age {age} falls in the Teenager category (13 - 19 years).");
                        }
                        else if (age <= 35)
                        {
                            Console.WriteLine($"Age {age} falls in the Young Adult category (20 - 35 years).");
                        }
                        else if (age <= 50)
                        {
                            Console.WriteLine($"Age {age} falls in the Adult category (36 - 50 years).");
                        }
                        else if (age <= 70)
                        {
                            Console.WriteLine($"Age {age} falls in the Senior Adult category (51 - 70 years).");
                        }
                        else
                        {
                            Console.WriteLine($"Age {age} falls in the Elderly category (71 years and above).");
                        }
                    }
                    else
                    {
                       
                        Console.WriteLine("Error: Please enter a valid non-negative age.");
                    }
                }
               
                Console.WriteLine("Would you like to continue? (Yes/No):");
                string response = Console.ReadLine().Trim().ToLower();

                if (response == "no")
                {
                    continueProgram = false;
                }
            }

            Console.WriteLine("Thank you for using the Age Group Classifier. Goodbye!");
        }
    }
}
