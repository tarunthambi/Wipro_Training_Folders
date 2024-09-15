namespace Day4_Assignments
{
    internal class Task7_sub
    {
        public class BookNotAvailableException : Exception
        {
            public BookNotAvailableException(string message) : base(message) { }
        }
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
                if (book.IsAvailable)
                {
                    book.Borrow();
                    borrowedBooks.Add(book);
                }
                else
                {
                    throw new BookNotAvailableException($"{book.Title} is currently unavailable.");
                }
            }
        }
        public enum Genre { Fiction, NonFiction, Science, History, Drama }

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

            public abstract void Checkout();
            public abstract void ReturnItem();
        }

        public class Library
        {
            private List<Book> books;

            public Library()
            {
                books = new List<Book>();
            }

            public List<Book> GetBookDetails()
            {
                return books;
            }

            public void AddBook(Book book)
            {
                books.Add(book);
            }

            public Book FindBook(string title)
            {
                return books.Find(b => b.Title == title);
            }

            public void BorrowBook(LibraryMember member, string bookTitle)
            {
                Book book = FindBook(bookTitle);
                if (book != null)
                {
                    member.BorrowBook(book);
                }
                else
                {
                    throw new BookNotAvailableException($"{bookTitle} is not in the library.");
                }
            }
        }
        public interface IBorrowable
        {
            void Borrow();
            void Return();
        }
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

            public override void Checkout()
            {
                Borrow();
            }

            public override void ReturnItem()
            {
                Return();
            }

            public void Borrow()
            {
                if (isAvailable)
                {
                    isAvailable = false;
                    Console.WriteLine($"{Title} has been borrowed.");
                }
                else
                {
                    throw new BookNotAvailableException($"{Title} is currently unavailable.");
                }
            }

            public void Return()
            {
                isAvailable = true;
                Console.WriteLine($"{Title} has been returned.");
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

        public static void Main(string[] args)
        {
            Library library = new Library();

            LibraryMember member1 = new LibraryMember("Dwayne Johnson", 1001, new DateTime(2023, 5, 1));
            LibraryMember member2 = new LibraryMember("Steve Smith", 1002, DateTime.Now);

            Book book1 = new Book("C# Programming", "John Smith", "123-456-789", 2020, Genre.Science);
            Book book2 = new Book("History of Europe", "Jane Doe", "987-654-321", 2018, Genre.History);

            library.AddBook(book1);   
            library.AddBook(book2);


            // Writing the book information to a file

            string filePath = "C:\\Users\\bonag\\OneDrive\\Documents\\Wipro\\C# Projects\\CSharp_solution\\Day4_Assignments\\LibraryBooks_Info.txt";
            using (StreamWriter writer = new StreamWriter(filePath))
            {
                foreach (var book in library.GetBookDetails())
                {
                    writer.WriteLine($"Title: {book.Title}, \nAuthor: {book.Author},  \nISBN: {book.ISBN},  \nPublication Year: {book.PublicationYear},  \nGenre: {book.BookGenre},  \nBorrowed By: {book.BorrowedBy},  \nAvailability: {(book.IsAvailable ? "Available" : "Not Available")}\n");
                }
            }

            Console.WriteLine("All the Books information were written to file: " + filePath);
        }
    }
}

