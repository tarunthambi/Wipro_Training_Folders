namespace Day2_CSharp_OOPS.OOP
{
    // Address is created as a value type data type
    struct Address
    {
        public string city;
        public string state;
        public string zipCode;
        public string country;
        public Address(string city, string state, string zipCode, string country)
        {
            this.city = city;
            this.state = state;
            this.zipCode = zipCode;
            this.country = country;
        }
    }

    enum Vertical { BNFS = 1, HealthCare, Manufacutring, Retail, Insurance }
    enum Role { Trainee = 1, AssociateConsultant, Consultant, Manager, Specialist, Director }

    class TestEmployee1
    {
        protected string EmpId, EmpName;
        protected Address EmpAddress;
        protected int EmpRole;
        protected int EmpVertical;
        protected double Salary;

        public TestEmployee1()
        {

        }
        public TestEmployee1(string empId, string empName, Address empAddress, int empRole, int empVertical, double salary)
        {
            EmpId = empId;
            EmpName = empName;
            EmpAddress = empAddress;
            EmpRole = empRole;
            EmpVertical = empVertical;
            Salary = salary;
        }

        public override string ToString()
        {
            return "EmpId: " + EmpId + "\nEmpName: " + EmpName + "\nCity: " + EmpAddress.city + "\nState: " + EmpAddress.state + "\nZipCode: " + EmpAddress.zipCode + "\nCountry: " + EmpAddress.country + "\nEmpVertical: " + getVertical(EmpVertical) + "\nEmpRole: " + getEmpRole(EmpRole) + "\nSalary: " + Salary;
        }

        private string getVertical(int empVertical)
        {
            switch (empVertical)
            {
                case 1: return "Banking and Financial Services";
                case 2: return "HealthCare";
                case 3: return "Manufacturing";
                case 4: return "Retail";
                case 5: return "Insurance";
                default: return "Invalid Vertical";
            }
        }

        private string getEmpRole(int empRole)
        {
            switch (empRole)
            {
                case 1: return "Trainee";
                case 2: return "Associate Consultant";
                case 3: return "Consultant";
                case 4: return "Manager";
                case 5: return "Specialist";
                case 6: return "Director";
                default: return "Invalid Role";
            }
        }
    }

    class RegularEmployee : TestEmployee1, IStreamFile, IDatabase
    {
        private bool allowance;
        private int no_of_team_members;

        public RegularEmployee()
        {
        }

        public RegularEmployee(string empId, string empName, Address empAddress, int empRole, int empVertical, double salary, bool allowance, int no_of_team_members)
            : base(empId, empName, empAddress, empRole, empVertical, salary)
        {
            this.allowance = allowance;
            this.no_of_team_members = no_of_team_members;
        }

        //Explicit Implementation
        void IDatabase.Write(object data)
        {
            // code for saving data in database
        }
        void IDatabase.Read()
        {
            // code for reading employee data from database
        }
        public void Read()
        {
            // Reading Employee Details from the file
            StreamReader streamReader = null;
            try
            {
                streamReader = new StreamReader("Employee.txt");
                string employee = streamReader.ReadToEnd();
                Console.WriteLine("Displaying Employee Details from the file:");
                Console.WriteLine();
                Console.WriteLine(employee);
            }
            catch (Exception e) { Console.WriteLine(e.Message); }
            finally
            {
                if (streamReader != null)
                    streamReader.Close();
            }
        }

        public void Write(object data)
        {
            // Writing Employee Details to the file
            StreamWriter streamWriter = null;
            try
            {
                streamWriter = new StreamWriter("Employee.txt", true);
                streamWriter.Write(data);
                streamWriter.WriteLine();
                streamWriter.Flush();
                Console.WriteLine("Employee details written to the file");
            }
            catch (Exception e) { Console.WriteLine(e.Message); }
            finally
            {
                if (streamWriter != null)
                    streamWriter.Close();
            }
        }

        public override string ToString()
        {
            return base.ToString() + "\nAllowance: " + allowance + "\nNo Of Team Members: " + no_of_team_members;
        }


    }

    //internal interface IDatabase
    //{
    //    void Write(object Data);
    //    void Read();
    //}

    //internal interface IStreamFile
    //{
    //    void Read();
    //    void Write(object data);
    //}

    internal class TestEmployee2
    {
        static void Main(string[] args)
        {
            //Employee newemployee1=new RegularEmployee("E001","Emp1",new Address("Mumbai","MH","140002","India"),4,1,75000,true,5);
            //Console.WriteLine(newemployee1.ToString());


            //Console.WriteLine();
            //Employee newemployee2 = new RegularEmployee("E002", "Emp2", new Address("Mumbai", "MH", "140002", "India"), 1, 2, 20000, false, 0);
            //Console.WriteLine(newemployee2.ToString());


            //For Interface
            RegularEmployee newemployee1 = new RegularEmployee("E001", "Emp1", new Address("Mumbai", "MH", "140002", "India"), 4, 1, 75000, true, 5);
            newemployee1.Write(newemployee1.ToString());

            Console.WriteLine();

            RegularEmployee newemployee2 = new RegularEmployee("E002", "Emp2", new Address("Mumbai", "MH", "140002", "India"), 1, 2, 20000, false, 0);
            newemployee2.Write(newemployee2.ToString());

            Console.WriteLine();

            RegularEmployee employee = new RegularEmployee();
            employee.Read();

            //Calling the Explicit Interface Methods
            IDatabase empdatabase = new RegularEmployee();
            empdatabase.Write(newemployee1);
            empdatabase.Write(newemployee2);

            empdatabase.Read();

            Console.ReadLine();
        }
    }
}