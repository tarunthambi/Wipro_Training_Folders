using APIGateway.Middleware;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;


namespace APIGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
           

            builder.Configuration.AddJsonFile("Ocelot.json");
            builder.Services.AddOcelot();
           
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("EnableCors", builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .WithMethods("PUT", "DELETE", "GET", "POST");
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //app.UseMiddleware<CorsMiddleware>();
            app.UseCors("EnableCors");
            app.UseOcelot().Wait();
            
            app.Run();
        }
    }
}