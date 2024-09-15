//using CommentsService.Models;
//using MongoDB.Driver;
//using Microsoft.Extensions.Configuration;

//namespace CommentsService.Data
//{
//    public class Comments_Context
//    {
//        private readonly IMongoDatabase _database;

//        public Comments_Context(IConfiguration configuration)
//        {
//            var connectionString = configuration.GetConnectionString("MongoDb");
//            if (string.IsNullOrEmpty(connectionString))
//            {
//                throw new ArgumentNullException("Connection string 'MongoDb' is not found in the configuration.");
//            }

//            var client = new MongoClient(connectionString);
//            _database = client.GetDatabase("Comments_Context_db");
//        }

//        public IMongoCollection<Comment> Comments => _database.GetCollection<Comment>("Comments");
//    }
//}
using CommentsService.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Configuration;

namespace CommentsService.Data
{
    public class Comments_Context
    {
        private readonly IMongoDatabase _database;

        public Comments_Context(IConfiguration configuration)
        {
            var databaseSettings = configuration.GetSection("Database").Get<DBsetting>();

            if (databaseSettings == null || string.IsNullOrEmpty(databaseSettings.ConnectionString))
            {
                throw new ArgumentNullException("Connection string is not found in the configuration.");
            }

            var client = new MongoClient(databaseSettings.ConnectionString);
            _database = client.GetDatabase(databaseSettings.DatabaseName);
        }

        public IMongoCollection<Comment> Comments => _database.GetCollection<Comment>("comments");
    }
}

