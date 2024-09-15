namespace Day4_Assignments
{
    internal class Task4_sub
    {
        public enum Genre { Fiction, NonFiction, Science, History, Drama }
        public partial class Book
        {
            private string title;
            private string author;
            private readonly string isbn;
            private int publicationYear;
            private Genre bookGenre;

            public string Title { get { return title; } set { title = value; } }
            public string Author { get { return author; } set { author = value; } }
            public string ISBN { get { return isbn; } }
            public int PublicationYear { get { return publicationYear; } set { publicationYear = value; } }
            public Genre BookGenre { get { return bookGenre; } set { bookGenre = value; } }

            public Book(string title, string author, string isbn, int publicationYear, Genre bookGenre)
            {
                this.title = title;
                this.author = author;
                this.isbn = isbn;
                this.publicationYear = publicationYear;
                this.bookGenre = bookGenre;
            }
            public virtual void PrintDetails()
            {
                Console.WriteLine($"Title: {Title}, \nAuthor: {Author}, \nISBN: {ISBN}, \nYear: {PublicationYear}, \nGenre: {BookGenre}");
            }
        }

        public class ReferenceBook : Book
        {
            public string ReferenceSection { get; set; }

            public ReferenceBook(string title, string author, string isbn, int publicationYear, Genre bookGenre, string referenceSection)
                : base(title, author, isbn, publicationYear, bookGenre)
            {
                ReferenceSection = referenceSection;
            }

            public override void PrintDetails()
            {
                base.PrintDetails();
                Console.WriteLine($"Reference Section: {ReferenceSection}");
            }
        }

        public static void Main()
        {
            Console.WriteLine("\nPolymorphism demonstration:");
            Book generalBook = new Book("Basic C#", "Tom White", "111-222-333", 2019, Genre.Science);
            Book referenceBook = new ReferenceBook("C# in Depth", "Jon Skeet", "444-555-666", 2018, Genre.Science, "Section B");

            generalBook.PrintDetails();
            Console.WriteLine();
            referenceBook.PrintDetails();
        }
    }
}

