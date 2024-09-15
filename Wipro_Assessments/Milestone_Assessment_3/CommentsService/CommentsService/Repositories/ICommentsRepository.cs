using CommentsService.Models;

namespace CommentsService.Repositories
{
    public interface ICommentsRepository
    {
        Task<IEnumerable<Comment>> GetCommentsAsync();
        Task<IEnumerable<Comment>> GetCommentsByTaskIdAsync(int taskId);
        Task CreateCommentAsync(Comment comment);
        Task UpdateCommentAsync(string id, Comment comment);
        Task DeleteCommentAsync(string id);
    }
}
