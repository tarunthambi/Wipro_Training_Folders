namespace Day4_Assignments
{
    internal class Task5_sub
    {
        public partial struct LibraryMember
        {
            private string name;
            private readonly int memberid;
            private DateTime membershipdate;
            private List<Book> borrowedBooks;

            public string Name { get { return name; } set { name = value; } }
            public int MemberID { get { return memberid; } }
            public DateTime MembershipDate { get { return membershipdate; } set { membershipdate = value; } }

            public LibraryMember(string name, int memberid, DateTime membershipdate)
            {
                this.name = name;
                this.memberid = memberid;
                this.membershipdate = membershipdate;
                this.borrowedBooks = new List<Book>();
            }

            public List<Book> GetBorrowedBooks()
            {
                return borrowedBooks;
            }

            public void BorrowBook(Book book)
            {
                borrowedBooks.Add(book);
            }
        }

        public enum Genre { Fiction, NonFiction, Science, History, Drama }

        //Created an abstract class LibraryItem with properties Title, PublicationYear, and abstract methods Checkout and ReturnItem.
        public abstract class LibraryItem
        {
            private string title;
            private int publicationYear;

            public string Title
            {
                get { return title; }
                set
                {
                    if (string.IsNullOrWhiteSpace(value))
                    {
                        throw new ArgumentException("Title cannot be empty or null.");
                    }
                    title = value;
                }
            }
            public int PublicationYear { get { return publicationYear; } set { publicationYear = value; } }

            public LibraryItem(string title, int publicationYear)
            {
                Title = title;
                PublicationYear = publicationYear;
            }

            public abstract void Checkout(LibraryMember member);
            public abstract void ReturnItem();
        }

        //Design an interface IBorrowable with methods Borrow and Return.
        public interface IBorrowable
        {
            void Borrow(LibraryMember member);
            void Return();
        }

        //Modified the Book and ReferenceBook classes to inherit from LibraryItem and implement the abstract methods.
        //Implemented the IBorrowable interface in the Book class. Updates the availability status of the book.
        public partial class Book : LibraryItem, IBorrowable
        {
            private string author;
            private readonly string isbn;
            private Genre bookGenre;
            private LibraryMember borrowedBy;
            private bool isAvailable;

            public string Author
            {
                get { return author; }
                set
                {
                    if (string.IsNullOrWhiteSpace(value))
                    {
                        throw new ArgumentException("Author cannot be empty or null.");
                    }
                    author = value;
                }
            }
            public string ISBN { get { return isbn; } }
            public Genre BookGenre { get { return bookGenre; } set { bookGenre = value; } }
            public LibraryMember BorrowedBy { get { return borrowedBy; } set { borrowedBy = value; } }
            public bool IsAvailable { get { return isAvailable; } set { isAvailable = value; } }

            public Book(string title, string author, string isbn, int publicationYear, Genre bookGenre)
                : base(title, publicationYear)
            {
                this.author = author;
                this.isbn = isbn;
                this.bookGenre = bookGenre;
                this.isAvailable = true;
            }
            public override void Checkout(LibraryMember member)
            {
                if (isAvailable)
                {
                    Borrow(member);
                }
                else
                {
                    Console.WriteLine("Book is already borrowed.");
                }
            }
            public override void ReturnItem()
            {
                if (!isAvailable)
                {
                    Return();
                }
                else
                {
                    Console.WriteLine("Book is not borrowed.");
                }
            }
            public void Borrow(LibraryMember member)
            {
                borrowedBy = member;
                isAvailable = false;
            }

            public void Return()
            {
                borrowedBy = default;
                isAvailable = true;
            }
            public override string ToString()
            {
                return ($"Title: {Title},\n Author: {Author},\n ISBN: {ISBN}, \nYear: {PublicationYear}, \nGenre: {BookGenre}, \nBorrowed by: {BorrowedBy.Name}");
            }

            public virtual void PrintDetails()
            {
                Console.WriteLine(ToString());
            }
        }

        //Modify the Book and ReferenceBook classes to inherit from LibraryItem and implement the abstract methods.
        public class ReferenceBook : LibraryItem
        {
            public string Author { get; set; }
            public string ISBN { get; }
            public Genre BookGenre { get; set; }
            public string ReferenceSection { get; set; }

            public ReferenceBook(string title, string author, string isbn, int publicationYear, Genre bookGenre, string referenceSection)
                : base(title, publicationYear)
            {
                Author = author;
                ISBN = isbn;
                BookGenre = bookGenre;
                ReferenceSection = referenceSection;
            }

            public override void Checkout(LibraryMember member)
            {
                throw new InvalidOperationException("Reference books cannot be borrowed.");
            }
            public override void ReturnItem()
            {
                throw new InvalidOperationException("Reference books cannot be borrowed.");
            }
            public virtual void PrintDetails()
            {
                Console.WriteLine($"{ToString()}, \nReference Section: {ReferenceSection}");
            }
        }


        public static void Main(string[] args)
        {
            LibraryMember member1 = new LibraryMember("Dwayne Johnson", 1001, new DateTime(2023, 5, 1));
            LibraryMember member2 = new LibraryMember("Steve Smith", 1002, DateTime.Now);

            Book book1 = new Book("C# Programming", "John Smith", "123-456-789", 2020, Genre.Science);
            Book book2 = new Book("History of Europe", "Jane Doe", "987-654-321", 2018, Genre.History);

            book1.Checkout(member1);
            book2.Checkout(member2);

            member1.BorrowBook(book1);
            member2.BorrowBook(book2);

            Console.WriteLine(book1.ToString());
            Console.WriteLine();
            Console.WriteLine(book2.ToString());
            Console.WriteLine();

            Console.WriteLine("Books borrowed by member1:");
            foreach (var book in member1.GetBorrowedBooks())
            {
                Console.WriteLine(book.Title);
            }

            Console.WriteLine("Books borrowed by member2:");
            foreach (var book in member2.GetBorrowedBooks())
            {
                Console.WriteLine(book.Title);
            }
        }
    }
}
