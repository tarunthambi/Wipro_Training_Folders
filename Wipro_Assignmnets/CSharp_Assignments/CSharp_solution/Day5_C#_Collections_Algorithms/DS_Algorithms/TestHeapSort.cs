namespace Day5_C__Collections_Algorithms.DS_Algorithms
{
    //LinkedList
    class Node
    {
        public int Data;
        public Node next;
        public Node(int data)
        {
            this.Data = data;
        }
    }
    class HeapSort
    {
        public Node Heap_Sort(Node head)
        {
            if (head == null)
                return null;
            Node[] nodes = (Node[])ConvertToArray(head);

            //Heap
            BuildHeap(nodes);

            int size = nodes.Length;
            for (int i = size - 1; i >= 0; i--)
            {
                //swap the root(main element) with the last element
                swap(nodes, 0, i);

                //Reduce the heap size and heapify the root
                Heapify(nodes, i, 0);
            }

            //Convert the array to the list again
            return ConvertToList(nodes);
        }

        private Node ConvertToList(Node[] nodes)
        {
            if (nodes.Length == 0)
                return null;
            for (int i = 0; i < nodes.Length - 1; i++)
            {
                nodes[i].next = nodes[i + 1];
            }
            nodes[nodes.Length - 1].next = null;
            return nodes[0];
        }

        private void BuildHeap(Node[] nodes)
        {
            int n = nodes.Length;
            for (int i = n / 2 - 1; i >= 0; i--)
            {
                Heapify(nodes, n, i);
            }
        }

        private void Heapify(Node[] nodes, int n, int i)
        {
            //Min Heap - descending order

            //int smallest = i;
            //int left = 2 * i + 1;
            //int right = 2 * i + 2;

            //if(left<n && nodes[left].Data < nodes[smallest].Data) { 
            //    smallest = left;
            //}
            //if (right < n && nodes[right].Data < nodes[smallest].Data)
            //{
            //    smallest = right;
            //}

            //if(smallest !=i)
            //{
            //    swap(nodes,i,smallest); 
            //    Heapify(nodes,n,smallest);
            //}

            //Max Heap - ascending order

            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;

            //if left child is larger than root
            if (left < n && nodes[left].Data > nodes[largest].Data)
            {
                largest = left;
            }

            //if right is largest than the largest
            if (right < n && nodes[right].Data > nodes[largest].Data)
            {
                largest = right;
            }

            //If largest is not root
            if (largest != i)
            {
                swap(nodes, i, largest);
                Heapify(nodes, n, largest);
            }
        }

        private void swap(Node[] nodes, int i, int k)
        {
            Node temp = nodes[i];
            nodes[i] = nodes[k];
            nodes[k] = temp;
        }

        private Node[] ConvertToArray(Node head)
        {
            var list = new List<Node>();
            var current = head;
            while (current != null)
            {
                list.Add(current);
                current = current.next;
            }
            return (Node[])list.ToArray();
        }
    }
    internal class TestHeapSort
    {
        static void Main(string[] args)
        {
            Node node = new Node(4);
            node.next = new Node(6);
            node.next.next = new Node(3);
            node.next.next.next = new Node(2);

            HeapSort heap = new HeapSort();
            Node sortedNode = heap.Heap_Sort(node);
            DisplaySortedHeap(sortedNode);

            Console.ReadLine();
        }

        private static void DisplaySortedHeap(Node sortedNode)
        {
            Console.WriteLine("Sorted List:");
            Node curr = sortedNode;

            while (curr != null)
            {
                Console.Write(curr.Data + " ");
                curr = curr.next;
            }
            Console.WriteLine();
        }
    }
}
