namespace Day5_C__Collections_Algorithms.Collection
{
    public class _Stack<T>
    {
        private List<T> elements = new List<T>();

        //Push an element onto the stack
        public void Push(T item)
        {
            elements.Add(item);
        }

        //Pop an item from the stack
        public T Pop()
        {
            if (elements.Count == 0)
            {
                throw new InvalidOperationException("The stack is empty");
            }

            T value = elements[elements.Count - 1];
            elements.RemoveAt(elements.Count - 1);
            return value;
        }

        //Peek at the top item of the stack without retreiving it
        public T Peek()
        {
            if (elements.Count == 0)
            {
                throw new InvalidOperationException("The stack is empty");
            }
            return elements[elements.Count - 1];
        }

        //Check if stack is empty
        public bool isEmpty()
        {
            return elements.Count == 0;
        }

        // Count the number of items
        public int Count
        {
            get { return elements.Count; }
        }
    }
    internal class TestCustomStack
    {
        static void Main(string[] args)
        {
            _Stack<int> stack = new _Stack<int>();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);
            stack.Push(5);

            try
            {

                Console.WriteLine($"Is Stack Empty?: {stack.isEmpty()}");

                Console.WriteLine($"Count of elements in stack: {stack.Count}");
                Console.WriteLine($"Top element is: {stack.Peek()}");

                Console.WriteLine($"Popped element is: {stack.Pop()}");
                Console.WriteLine($"Top element is: {stack.Peek()}");
                Console.WriteLine();
                while (stack.Count > 0)
                    Console.Write(stack.Pop() + " ");

                Console.WriteLine();
                Console.WriteLine($"Is Stack Empty?: {stack.isEmpty()}");

                Console.WriteLine($"Top element is: {stack.Peek()}");
                Console.WriteLine($"Popped element is: {stack.Pop()}");
            }
            catch (InvalidOperationException e)
            {
                Console.WriteLine(e.Message);
            }
            Console.Read();

        }
    }
}
