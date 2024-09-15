using System.Collections.Generic;
using System.Threading.Tasks;
using TasksService.Models;

namespace TasksService.Repositories
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Tasks>> GetTasksAsync();
        Task<Tasks> GetTaskByIdAsync(int id);
        Task CreateTaskAsync(Tasks task);
        Task UpdateTaskAsync(Tasks task);
        Task DeleteTaskAsync(int id);
    }
}
