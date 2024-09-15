using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CommentsService.Models
{
    public class Comment
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("TaskId")]
        public int TaskId { get; set; }

        [BsonElement("Content")]
        public string Content { get; set; }

        [BsonElement("Author")]
        public string Author { get; set; }

        [BsonElement("CreatedAt")]
        public DateTime CreatedAt { get; set; }
    }
}
//[BsonId] //This will map to the mongodb _id field
//[BsonRepresentation(BsonType.ObjectId)]
//public string Id { get; set; } = ObjectId.GenerateNewId().ToString();
