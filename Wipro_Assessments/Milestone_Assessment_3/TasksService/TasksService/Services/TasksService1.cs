using System.Collections.Generic;
using System.Threading.Tasks;
using TasksService.Models;
using TasksService.Repositories;

namespace TasksService.Services
{
    public class TasksService1 : ITasksService
    {
        private readonly ITasksRepository _tasksRepository;

        public TasksService1(ITasksRepository tasksRepository)
        {
            _tasksRepository = tasksRepository;
        }

        public async Task<IEnumerable<Tasks>> GetAllTasksAsync()
        {
            return await _tasksRepository.GetTasksAsync();
        }

        public async Task<Tasks> GetTaskByIdAsync(int id)
        {
            return await _tasksRepository.GetTaskByIdAsync(id);
        }

        public async Task CreateTaskAsync(Tasks task)
        {
            await _tasksRepository.CreateTaskAsync(task);
        }

        public async Task UpdateTaskAsync(Tasks task)
        {
            await _tasksRepository.UpdateTaskAsync(task);
        }

        public async Task DeleteTaskAsync(int id)
        {
            await _tasksRepository.DeleteTaskAsync(id);
        }
    }
}
