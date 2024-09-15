using ReviewManagementAPI.Model;

namespace ReviewManagementAPI.Service
{
    public interface IReviewService
    {
        Task<IEnumerable<Review>> GetReviewsAsync();
        Task<Review> GetReviewByIdAsync(int id);
        Task<Review> CreateReviewAsync(Review review);
        Task<Review> UpdateReviewAsync(Review review);
        Task<bool> DeleteReviewAsync(int id);
    }
}
