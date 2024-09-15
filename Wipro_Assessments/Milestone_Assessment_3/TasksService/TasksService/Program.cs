using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TasksService.Data;
using TasksService.Repositories;
using TasksService.Services;

namespace TasksService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Configure MySQL context
            builder.Services.AddDbContext<Tasks_Context>(options =>
                options.UseMySql(builder.Configuration.GetConnectionString("Tasks_Context") ?? throw new InvalidOperationException("Connection string 'Tasks_Context' not found."),
                    new MySqlServerVersion(new Version(8, 0, 36))));

            // Register services and repositories
            builder.Services.AddScoped<ITasksService, TasksService1>();
            builder.Services.AddScoped<ITasksService, TasksService1>();
            builder.Services.AddScoped<ITasksRepository, TasksRepository>();

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
