namespace Day2_CSharp_OOPS.OOP
{
    abstract class Printer
    {
        public abstract void Print(string doc);
        public void setPrinter(string printer)
        {
            Console.WriteLine(printer + " printer is set for printing");
        }

        public virtual void printMessage()
        {
            Console.WriteLine("Printer Task Started....");
        }
    }
    class DotMatrix : Printer
    {
        public DotMatrix()
        {
            base.setPrinter("DotMatrix");
        }

        public override void printMessage()
        {
            Console.WriteLine("DotMatrix Printer Task Started....");
        }
        public override void Print(string doc)
        {
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine(doc + " printing done......");
        }
    }
    class Lazer : Printer
    {
        public Lazer()
        {
            base.setPrinter("Lazer");
        }

        public override void printMessage()
        {
            Console.WriteLine("Lazer Printer Task Started....");
        }

        public override void Print(string doc)
        {
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine(doc + " printing done......");
        }

        public void ColorPrint(string doc, string color)
        {
            base.setPrinter("Lazer color");
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine(doc + " printing done with color " + color);
        }
    }
    internal class TestPrinter
    {
        static void Main(string[] args)
        {
            Printer dotmatrix = new DotMatrix();
            dotmatrix.printMessage();
            dotmatrix.Print("Abstract Class");

            Console.WriteLine();

            Lazer lazer = new Lazer();
            lazer.printMessage();
            lazer.Print("Abstract Method");

            Console.WriteLine();
            lazer.ColorPrint("Abstract Class and Methods", "blue");

            Console.ReadLine();


        }
    }
}
