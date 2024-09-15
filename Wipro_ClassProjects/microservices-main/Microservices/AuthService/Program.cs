using AuthService.Data;
using AuthService.Middleware;
using Microsoft.EntityFrameworkCore;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

IConfiguration configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();


//builder.Services.AddConsulConfig(configuration);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(configuration.GetConnectionString("AuthContext"));
});





builder.Services.AddCors(options =>
{
    options.AddPolicy("EnableCors", builder =>
    {
         builder.WithOrigins("http://localhost:4200")
        .AllowAnyHeader()
        .AllowAnyMethod()
		.WithMethods("PUT", "DELETE", "GET", "POST");
	});
});

builder.Services.AddControllers();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseAuthentication();
app.UseAuthorization();
app.UseMiddleware<CorsMiddleware>();
app.UseCors("EnableCors");
app.UseRouting();
app.MapControllers();
app.Run();

