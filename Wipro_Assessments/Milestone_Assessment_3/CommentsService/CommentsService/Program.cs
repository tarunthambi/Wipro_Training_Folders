//using CommentsService.Data;
//using CommentsService.Repositories;
//using CommentsService.Services;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.DependencyInjection;

//namespace CommentsService
//{
//    public class Program
//    {
//        public static void Main(string[] args)
//        {
//            var builder = WebApplication.CreateBuilder(args);
//            //builder.Services.AddDbContext<Comments_Context>(options =>
//            //    options.UseSqlServer(builder.Configuration.GetConnectionString("Comments_Context") ?? throw new InvalidOperationException("Connection string 'Comments_Context' not found.")));

//            // Add services to the container.
//            builder.Services.AddSingleton<Comments_Context>(); // Register the MongoDB context as a singleton
//            builder.Services.AddScoped<ICommentsRepository, CommentsRepository>(); // Register the repository
//            builder.Services.AddScoped<ICommentsService, CommentsService.Services.CommentsService>(); // Register the service

//            builder.Services.AddControllers();

//            // Configure Swagger/OpenAPI
//            builder.Services.AddEndpointsApiExplorer();
//            builder.Services.AddSwaggerGen();

//            var app = builder.Build();

//            // Configure the HTTP request pipeline.
//            if (app.Environment.IsDevelopment())
//            {
//                app.UseSwagger();
//                app.UseSwaggerUI();
//            }

//            app.UseAuthorization();

//            app.MapControllers();

//            app.Run();
//        }
//    }
//}
using CommentsService.Data;
using CommentsService.Repositories;
using CommentsService.Services;
using CommentsService.Models;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace CommentsService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.Configure<DBsetting>(
                builder.Configuration.GetSection("Database"));

            // Register services
            builder.Services.AddSingleton<Comments_Context>();
            builder.Services.AddScoped<ICommentsRepository, CommentsRepository>();
            builder.Services.AddScoped<ICommentsService, CommentsService.Services.CommentsService>();

            // Add configuration for controllers and Swagger
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

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


