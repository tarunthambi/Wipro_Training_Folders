using CommentsService.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Xml.Linq;

namespace CommentsService.Services
{
    public interface ICommentsService
    {
        Task<IEnumerable<Comment>> GetCommentsAsync();
        Task<IEnumerable<Comment>> GetCommentsByTaskIdAsync(int taskId);
        Task CreateCommentAsync(Comment comment);
        Task UpdateCommentAsync(string id, Comment comment);
        Task DeleteCommentAsync(string id);
    }
}