using Microsoft.EntityFrameworkCore;
using CustomerService.Models;
using CustomerService.Repository;
using CustomerService.Service;
using Microsoft.OpenApi.Models;
using AspNetCoreRateLimit;
using CustomerService.Middleware;
using Serilog;

namespace CustomerService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            IConfiguration configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();


            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Register the services           

            builder.Services.AddDbContext<CustomerContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("ECommerceConnection"));
            });

            //AddScoped - one instance per request
            //AddSingleton - One instance for the entire application lifetime
            //AddTransient - New instance every time it is requested

            builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
            builder.Services.AddScoped<ICustomerService,Service.CustomerService>();
            builder.Services.AddControllers();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy",
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:3000")
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .WithMethods("PUT", "DELETE", "GET", "POST");
                    });
            });

            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "V1",
                    Title = "Customer Service API",
                    Description = "Customer Service API"
                });
            }
            );

           
            builder.Host.UseSerilog((context, configuration) => configuration.ReadFrom.Configuration(context.Configuration));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                //app.UseSwagger();
                //app.UseSwaggerUI();
                app.UseSwagger(c => { c.SerializeAsV2 = true; });
                app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "Customer Service API"); });
            }

            app.UseSerilogRequestLogging();
            //app.UseMiddleware<CorsMiddleWare>();
            app.UseCors("MyPolicy");
            app.UseAuthorization();
            app.MapControllers();
           
            
            app.Run();
        }
    }
}