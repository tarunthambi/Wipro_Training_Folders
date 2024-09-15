namespace Day2_CSharp_OOPS.OOP
{
    class Base
    {
        private string name = "user";
        public Base() { Console.WriteLine("Base Cons"); }

        public Base(string str)
        {
            Console.WriteLine(str);
        }
        ~Base() { Console.WriteLine("Base Des"); }

        protected void GetName()
        {
            Console.WriteLine("Name = " + name);
        }
    }
    class Derived : Base
    {
        public Derived(string str) : base(str) //base class initialization
        {
            Console.WriteLine("Derived Cons");
            base.GetName();
        }
        public void Info()
        {
            Console.WriteLine("Info");
        }
        ~Derived() { Console.WriteLine("Derived Des"); }
    }
    internal class TestInheritance
    {
        static void Main(string[] args)
        {
            Base obj = new Base();
            Derived derived = new Derived("Invocation of constructors");
            //derived.Info();

            //new Derived();
            //new Derived();
            //Console.ReadLine();
        }
    }
}