using BooksService.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace BooksService.Service
{
    public class BookService:IBookService
    {
        private readonly IMongoCollection<Book> _booksCollection;

        public BookService(IOptions<BookDbDatabaseSettings> bookdbDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                bookdbDatabaseSettings.Value.ConnectionString
                );

            var mongoDatabase = mongoClient.GetDatabase(
                bookdbDatabaseSettings.Value.DatabaseName
                ) ;

            _booksCollection = mongoDatabase.GetCollection<Book>(
                bookdbDatabaseSettings.Value.BooksCollectionName
                );
                
        }

        public async Task<List<Book>> GetAsync() =>
            await _booksCollection.Find(_ => true).ToListAsync();

        public async Task<Book?> GetByIdAsync(int id) =>
            await _booksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Book newBook) =>
            await _booksCollection.InsertOneAsync(newBook);

        public async Task UpdateAsync(int id,Book updatedBook) =>
            await _booksCollection.ReplaceOneAsync(x=>x.Id==id, updatedBook);

        public async Task RemoveAsync(int id) =>
            await _booksCollection.DeleteOneAsync(x=>x.Id==id);



        public async Task<Book> GetByNameAsync(string name) =>
            await _booksCollection.Find(x => x.Title == name).FirstOrDefaultAsync();

    }
}
