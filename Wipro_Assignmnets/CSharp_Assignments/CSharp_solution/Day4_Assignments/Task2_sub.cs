namespace Day4_Assignments
{
    internal class Task2_sub
    {
        public partial struct LibraryMember
        {
            private string name;
            private readonly int memberid;
            private DateTime membershipdate;

            public string Name { get { return name; } set { name = value; } }
            public int MemberID { get { return memberid; } }
            public DateTime MembershipDate { get { return membershipdate; } set { membershipdate = value; } }

            public LibraryMember(string name, int memberid, DateTime membershipdate)
            {
                this.name = name;
                this.memberid = memberid;
                this.membershipdate = membershipdate;
            }
        }

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
        }
    }
}




//1. Use auto-implemented properties when you do not need custom logic, as they are more concise
//   and easier to read.{get;set;}
//2. Use private backing fields when you need to add custom logic to the getters or setters.

////The use of partial classes and structs allows you to extend the existing definitions without redefining them.
//the 'this' keyword is used to refer to the current instance of the class. When you have a parameter name that is 
// the same as a field name, you need to use 'this' to distinguish between the field and the parameter.