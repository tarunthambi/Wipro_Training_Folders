using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace BooksService.Models
{
    //public class Authors
    //{
    //    [BsonElement("author_name")]
    //    public  string  AuthorName { get; set; }
    //    [BsonElement("author_email")]
    //    public string AuthorEmail { get; set; }
    //    [BsonElement("location")]
    //    public string  Location { get; set; }
    //}
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string ShortDescription { get; set; }
        public string Status { get; set; }

        //[BsonId] //This will map to the mongodb _id field
        //[BsonRepresentation(BsonType.ObjectId)]
        //public string Id { get; set; }=ObjectId.GenerateNewId().ToString();
        //[BsonElement("title")]
        //public string Title { get; set; }
        //[BsonElement("shortdescription")]
        //public string ShortDescription { get; set; }
        //[BsonElement("status")]
        //public string Status { get; set; }

        //One to one
        //public Authors Authors { get; set; }

        //One to many

        //[BsonElement("authors")]
        //public List<Authors> Authors { get; set; }=new List<Authors>();


    }
}
