using Microsoft.EntityFrameworkCore;
using ProductAPI.Models;
using ProductAPI.Repository;
using Pomelo.EntityFrameworkCore.MySql;
using ProductAPI.Controllers;


namespace webapimysql
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var connectionstring = builder.Configuration.GetConnectionString("TestConnection");
            builder.Services.AddDbContext<ITemContext>(options =>
            {
                options.UseMySql(connectionstring,ServerVersion.Parse("8.0.32-mysql"));
            });
           

            builder .Services.AddScoped<ITemRepository,ITemRepository>();
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