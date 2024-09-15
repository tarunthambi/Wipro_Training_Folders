namespace Day4_Assignments
{
    public class Task3_Sub
    {
        public partial struct LibraryMember
        {
            private List<Book> borrowedBooks;
            public List<Book> GetBorrowedBooks()
            {
                return borrowedBooks;
            }
            public void BorrowBook(Book book)
            {
                borrowedBooks.Add(book);
            }

            public LibraryMember(string name, int memberID, DateTime MembershipDate)
            {
                this.borrowedBooks = new List<Book>();
            }
        }

        public partial class Book
        {
            private string title;

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
        }
    }
}
