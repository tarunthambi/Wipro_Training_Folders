using BooksService.Models;

namespace BooksService.Service
{
    public interface IBookService
    {
        Task CreateAsync(Book newBook);
        Task<List<Book>> GetAsync();
        Task<Book> GetByIdAsync(int id);
        Task<Book> GetByNameAsync(string name);
        Task RemoveAsync(int id);
        Task UpdateAsync(int id, Book updatedBook);



    }
}
