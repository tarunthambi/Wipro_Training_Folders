using CommentsService.Models;
using MongoDB.Driver;
using CommentsService.Data;

namespace CommentsService.Repositories
{
    public class CommentsRepository : ICommentsRepository
    {
        private readonly IMongoCollection<Comment> _comments;

        public CommentsRepository(Comments_Context context)
        {
            _comments = context.Comments;
        }

        public async Task<IEnumerable<Comment>> GetCommentsAsync() =>
            await _comments.Find(comment => true).ToListAsync();

        public async Task<IEnumerable<Comment>> GetCommentsByTaskIdAsync(int taskId) =>
            await _comments.Find(comment => comment.TaskId == taskId).ToListAsync();

        public async Task CreateCommentAsync(Comment comment) =>
            await _comments.InsertOneAsync(comment);

        public async Task UpdateCommentAsync(string id, Comment comment) =>
            await _comments.ReplaceOneAsync(c => c.Id == id, comment);

        public async Task DeleteCommentAsync(string id) =>
            await _comments.DeleteOneAsync(comment => comment.Id == id);
    }
}
