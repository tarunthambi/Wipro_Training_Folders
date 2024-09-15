using CommentsService.Models;
using CommentsService.Services;
using Microsoft.AspNetCore.Mvc;

namespace CommentsService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly ICommentsService _commentsService;

        public CommentsController(ICommentsService commentsService)
        {
            _commentsService = commentsService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comment>>> GetAllComments()
        {
            var comments = await _commentsService.GetCommentsAsync();
            return Ok(comments);
        }

        [HttpGet("task/{taskId}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetCommentsByTaskId(int taskId)
        {
            var comments = await _commentsService.GetCommentsByTaskIdAsync(taskId);
            return Ok(comments);
        }

        [HttpPost]
        public async Task<ActionResult<Comment>> CreateComment(Comment comment)
        {
            await _commentsService.CreateCommentAsync(comment);
            return CreatedAtAction(nameof(GetCommentsByTaskId), new { taskId = comment.TaskId }, comment);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateComment(string id, Comment comment)
        {
            await _commentsService.UpdateCommentAsync(id, comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(string id)
        {
            await _commentsService.DeleteCommentAsync(id);
            return NoContent();
        }
    }
}
