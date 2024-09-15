using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using TasksService.Data;
using TasksService.Models;

namespace TasksService.Repositories
{
    public class TasksRepository : ITasksRepository
    {
        private readonly Tasks_Context _context;

        public TasksRepository(Tasks_Context context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tasks>> GetTasksAsync()
        {
            return await _context.Tasks.ToListAsync();
        }

        public async Task<Tasks> GetTaskByIdAsync(int id)
        {
            return await _context.Tasks.FindAsync(id);
        }

        public async Task CreateTaskAsync(Tasks task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTaskAsync(Tasks task)
        {
            _context.Entry(task).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTaskAsync(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
        }
    }
}
