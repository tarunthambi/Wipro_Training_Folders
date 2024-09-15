namespace Day4_Exceptions_File.Exceptions
{
    // Custom Exception Class
    public class InsufficientBalanceException : ApplicationException
    {
        public InsufficientBalanceException(string message) : base(message) { }
        public override string Message => base.Message;

    }

    //Account
    class Account
    {
        double balance;
        string custname;
        public Account(string custname, double balance)
        {
            this.custname = custname;
            this.balance = balance;
        }
        public double Balance //read-only prop
        {
            get { return balance; }
        }

        public void Deposit(double amount)
        {
            balance += amount;
        }

        public void Withdraw(double amount)
        {
            if (amount > balance)
            {
                throw new InsufficientBalanceException("Error: No sufficient balance available to withdraw");
            }
            else
            {
                balance -= amount;
            }
        }
    }
    internal class TestAccount
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ABC Bank");
            Console.WriteLine("Enter Name");
            string name = Console.ReadLine();
            Console.WriteLine("Enter initial amount");
            double amount = Convert.ToDouble(Console.ReadLine());

            Account account = new Account(name, amount);
            Console.WriteLine("Account Created");
            Console.WriteLine("Current Balance: " + account.Balance);

            Console.WriteLine("Select the transaction");
            Console.WriteLine("1. Deposit");
            Console.WriteLine("2. Withdraw");

            int option = Convert.ToInt32(Console.ReadLine());
            switch (option)
            {
                case 1:
                    Deposit_Transaction(account);
                    break;
                case 2:
                    Withdraw_Transaction(account);
                    break;
                default:
                    Console.WriteLine("Invalid Option");
                    break;
            }
        }

        private static void Withdraw_Transaction(Account account)
        {
            Console.WriteLine("Enter the amount to withdraw");
            double withamount = Convert.ToDouble(Console.ReadLine());
            try
            {
                account.Withdraw(withamount);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                Console.WriteLine("Current Balance After Transaction: " + account.Balance);
                Console.WriteLine("Transaction Completed");
            }

        }

        private static void Deposit_Transaction(Account account)
        {
            Console.WriteLine("Enter the amount to deposit");
            double depamount = Convert.ToDouble(Console.ReadLine());
            account.Deposit(depamount);
            Console.WriteLine("Current Balance After Transaction: " + account.Balance);
        }
    }
}
