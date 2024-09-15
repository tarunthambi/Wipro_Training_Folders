using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BooksService.Models;
using BooksService.Service;

namespace BooksService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookService _bookService;

        public BookController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> Get() =>
            await _bookService.GetAsync();

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Book>> Get(int id)
        {
            var book = await _bookService.GetByIdAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return book;
        }

        [HttpGet("{title}")]
        public async Task<ActionResult<Book>> Get(string title)
        {
            var book = await _bookService.GetByNameAsync(title);
            if (book == null)
            {
                return NotFound();
            }
            return book;
        }

        [HttpPost]
        public async Task<ActionResult> Create(Book newBook)
        {
           await _bookService.CreateAsync(newBook);
            return Ok(newBook);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id,Book updatedBook)
        {
            var book=await _bookService.GetByIdAsync(id);
            if(book is null)
            {
                return NotFound();
            }
            updatedBook.Id= book.Id;    
            await _bookService.UpdateAsync(id,updatedBook);

            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            var book=await _bookService.GetByIdAsync(id);
            if(book is null)
            {
                return NotFound();
            }
            await _bookService.RemoveAsync(id);

            return NoContent();
                 
        }
    }
}
