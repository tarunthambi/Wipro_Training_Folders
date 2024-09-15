namespace Day4_Assignments
{
    internal class Task_1
    {
        public struct LibraryMember
        {
            public string Name;
            public int MemberID;
            public DateTime MembershipDate;
            public LibraryMember(string name, int memberID, DateTime membershipDate)
            {
                Name = name;
                MemberID = memberID;
                MembershipDate = membershipDate;
            }
        }

        public enum Genre { Fiction, NonFiction, Science, History, Drama }

        public class Book
        {
            public string Title;
            public string Author;
            public string ISBN;
            public int PublicationYear;
            public Genre BookGenre;
            //public LibraryMember BorrowedBy;

            public Book(string title, string author, string isbn, int publicationYear, Genre bookGenre)
            {
                Title = title;
                Author = author;
                ISBN = isbn;
                PublicationYear = publicationYear;
                BookGenre = bookGenre;
            }
        }

        Book book1 = new Book("C# Programming", "John Smith", "123-456-789", 2020, Genre.Science);
        Book book2 = new Book("History of Europe", "Jane Doe", "987-654-321", 2018, Genre.History);
    }
}
