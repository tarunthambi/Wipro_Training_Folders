//using System;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;
//using Moq;
//using UserService.Controllers;
//using UserService.Data;
//using UserService.DTO;
//using UserService.Models;
//using UserService.Helper;
//using Microsoft.Extensions.Configuration;
//using Microsoft.EntityFrameworkCore;
//using System.Linq.Expressions;
//using NUnit.Framework;

//namespace UserService.Tests
//{
//    [TestFixture]
//    public class AuthControllerTests
//    {
//        private Mock<ApplicationDbContext> _mockContext;
//        private Mock<IConfiguration> _mockConfig;
//        private AuthController _controller;

//        [SetUp]
//        public void Setup()
//        {
//            _mockContext = new Mock<ApplicationDbContext>();
//            _mockConfig = new Mock<IConfiguration>();
//            _mockConfig.Setup(c => c["Jwt:Key"]).Returns("your-jwt-secret-key");
//            _controller = new AuthController(_mockContext.Object, _mockConfig.Object);
//        }

//        [Test]
//        public async Task RegisterUser_ValidUser_ReturnsOk()
//        {
//            // Arrange
//            var userDto = new RegisterUserDto
//            {
//                UserName = "newUser",
//                Email = "newuser@example.com",
//                Password = "Password123!"
//            };

//            _mockContext.Setup(c => c.Users.AnyAsync(It.IsAny<Expression<Func<User, bool>>>(), default)).ReturnsAsync(false);

//            // Act
//            var result = await _controller.RegisterUser(userDto);

//            // Assert
//            var okResult = result as OkObjectResult;
//            Assert.IsNotNull(okResult);
//            Assert.AreEqual(200, okResult.StatusCode);
//        }

//        [Test]
//        public async Task RegisterUser_UserNameExists_ReturnsBadRequest()
//        {
//            // Arrange
//            var userDto = new RegisterUserDto
//            {
//                UserName = "existingUser",
//                Email = "newemail@example.com",
//                Password = "Password123!"
//            };

//            _mockContext.Setup(c => c.Users.AnyAsync(u => u.UserName == userDto.UserName, default)).ReturnsAsync(true);

//            // Act
//            var result = await _controller.RegisterUser(userDto);

//            // Assert
//            var badRequestResult = result as BadRequestObjectResult;
//            Assert.IsNotNull(badRequestResult);
//            Assert.AreEqual(400, badRequestResult.StatusCode);
//            Assert.AreEqual("User Name already exists", ((dynamic)badRequestResult.Value).Message);
//        }

//        [Test]
//        public async Task Authenticate_InvalidPassword_ReturnsBadRequest()
//        {
//            // Arrange
//            var loginDto = new LoginUserDto
//            {
//                Email = "user@example.com",
//                Password = "WrongPassword"
//            };

//            var user = new User
//            {
//                Email = "user@example.com",
//                UserName = "testuser",
//                Password = PasswordHasher.HashPassword("CorrectPassword")
//            };

//            _mockContext.Setup(c => c.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email, default)).ReturnsAsync(user);

//            // Act
//            var result = await _controller.Authenticate(loginDto);

//            // Assert
//            var badRequestResult = result as BadRequestObjectResult;
//            Assert.IsNotNull(badRequestResult);
//            Assert.AreEqual(400, badRequestResult.StatusCode);
//            Assert.AreEqual("Password is incorrect", ((dynamic)badRequestResult.Value).Message);
//        }

//        [Test]
//        public async Task Authenticate_ValidLogin_ReturnsOkWithToken()
//        {
//            // Arrange
//            var loginDto = new LoginUserDto
//            {
//                Email = "user@example.com",
//                Password = "CorrectPassword"
//            };

//            var user = new User
//            {
//                Email = "user@example.com",
//                UserName = "testuser",
//                Password = PasswordHasher.HashPassword("CorrectPassword")
//            };

//            _mockContext.Setup(c => c.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email, default)).ReturnsAsync(user);

//            // Act
//            var result = await _controller.Authenticate(loginDto);

//            // Assert
//            var okResult = result as OkObjectResult;
//            Assert.IsNotNull(okResult);
//            Assert.AreEqual(200, okResult.StatusCode);
//            Assert.IsNotNull(((dynamic)okResult.Value).Token);
//        }

//        [Test]
//        public async Task GetUser_UserNotFound_ReturnsNotFound()
//        {
//            // Arrange
//            _mockContext.Setup(c => c.Users.FirstOrDefaultAsync(u => u.UserName == "unknownUser", default)).ReturnsAsync((User)null);

//            // Act
//            var result = await _controller.GetUser("unknownUser");

//            // Assert
//            var notFoundResult = result.Result as NotFoundResult;
//            Assert.IsNotNull(notFoundResult);
//            Assert.AreEqual(404, notFoundResult.StatusCode);
//        }

//        [Test]
//        public async Task GetUser_UserFound_ReturnsOk()
//        {
//            // Arrange
//            var user = new User
//            {
//                UserName = "testuser",
//                Email = "user@example.com"
//            };

//            _mockContext.Setup(c => c.Users.FirstOrDefaultAsync(u => u.UserName == "testuser", default)).ReturnsAsync(user);

//            // Act
//            var result = await _controller.GetUser("testuser");

//            // Assert
//            var okResult = result.Result as OkObjectResult;
//            Assert.IsNotNull(okResult);
//            Assert.AreEqual(200, okResult.StatusCode);
//            var returnedUser = okResult.Value as User;
//            Assert.IsNotNull(returnedUser);
//            Assert.AreEqual("testuser", returnedUser.UserName);
//        }

//        [Test]
//        public async Task UpdateUser_EmailExists_ReturnsBadRequest()
//        {
//            // Arrange
//            var updateUserDto = new UpdateUserDto
//            {
//                Email = "existingemail@example.com",
//                Password = "NewPassword123!"
//            };

//            var user = new User
//            {
//                UserName = "testuser",
//                Email = "oldemail@example.com",
//                Password = PasswordHasher.HashPassword("OldPassword123!")
//            };

//            _mockContext.Setup(c => c.Users.FirstOrDefaultAsync(u => u.UserName == "testuser", default)).ReturnsAsync(user);
//            _mockContext.Setup(c => c.Users.AnyAsync(u => u.Email == updateUserDto.Email, default)).ReturnsAsync(true);

//            // Act
//            var result = await _controller.UpdateUser("testuser", updateUserDto);

//            // Assert
//            var badRequestResult = result as BadRequestObjectResult;
//            Assert.IsNotNull(badRequestResult);
//            Assert.AreEqual(400, badRequestResult.StatusCode);
//            Assert.AreEqual("Email Id already exists", ((dynamic)badRequestResult.Value).Message);
//        }

//        [Test]
//        public async Task UpdateUser_ValidUpdate_ReturnsOk()
//        {
//            // Arrange
//            var updateUserDto = new UpdateUserDto
//            {
//                Email = "newemail@example.com",
//                Password = "NewPassword123!"
//            };

//            var user = new User
//            {
//                UserName = "testuser",
//                Email = "oldemail@example.com",
//                Password = PasswordHasher.HashPassword("OldPassword123!")
//            };

//            _mockContext.Setup(c => c.Users.FirstOrDefaultAsync(u => u.UserName == "testuser", default)).ReturnsAsync(user);
//            _mockContext.Setup(c => c.Users.AnyAsync(u => u.Email == updateUserDto.Email, default)).ReturnsAsync(false);

//            // Act
//            var result = await _controller.UpdateUser("testuser", updateUserDto);

//            // Assert
//            var okResult = result as OkObjectResult;
//            Assert.IsNotNull(okResult);
//            Assert.AreEqual(200, okResult.StatusCode);
//            Assert.AreEqual("User details updated successfully", ((dynamic)okResult.Value).Message);
//        }
//    }
//}
