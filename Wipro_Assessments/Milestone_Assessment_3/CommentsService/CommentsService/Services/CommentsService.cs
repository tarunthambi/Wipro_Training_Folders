using CommentsService.Models;
using CommentsService.Repositories;

namespace CommentsService.Services
{
    public class CommentsService : ICommentsService
    {
        private readonly ICommentsRepository _repository;

        public CommentsService(ICommentsRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Comment>> GetCommentsAsync() =>
            await _repository.GetCommentsAsync();

        public async Task<IEnumerable<Comment>> GetCommentsByTaskIdAsync(int taskId) =>
            await _repository.GetCommentsByTaskIdAsync(taskId);

        public async Task CreateCommentAsync(Comment comment) =>
            await _repository.CreateCommentAsync(comment);

        public async Task UpdateCommentAsync(string id, Comment comment) =>
            await _repository.UpdateCommentAsync(id, comment);

        public async Task DeleteCommentAsync(string id) =>
            await _repository.DeleteCommentAsync(id);
    }
}


//public class CommentService : ICommentService
//{
//    private readonly IMongoCollection<Comment> _commentsCollection;

//    public CommentService(IOptions<DatabaseSettings> databaseSettings)
//            var mongoClient = new MongoClient(
//                databaseSettings.Value.ConnectionString
//                );

//    var mongoDatabase = mongoClient.GetDatabase(
//        databaseSettings.Value.DatabaseName
//        );

//    _commentsCollection = mongoDatabase.GetCollection<Comments>(
//        databaseSettings.Value.CommentsCollectionName

//        );
//        }
//public async Task<List<Comments>> GetAsync() =>
//            await _commentsCollection.Find(_ => true).ToListAsync();