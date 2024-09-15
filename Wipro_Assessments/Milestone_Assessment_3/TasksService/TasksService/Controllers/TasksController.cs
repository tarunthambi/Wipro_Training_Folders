using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TasksService.Models;
using TasksService.Services;

namespace TasksService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITasksService _tasksService;

        public TasksController(ITasksService tasksService)
        {
            _tasksService = tasksService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tasks>>> GetTasks()
        {
            var tasks = await _tasksService.GetAllTasksAsync();
            return Ok(tasks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tasks>> GetTask(int id)
        {
            var task = await _tasksService.GetTaskByIdAsync(id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        [HttpPost]
        public async Task<ActionResult<Tasks>> CreateTask(Tasks task)
        {
            await _tasksService.CreateTaskAsync(task);
            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, Tasks task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            await _tasksService.UpdateTaskAsync(task);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            await _tasksService.DeleteTaskAsync(id);
            return NoContent();
        }
    }
}
