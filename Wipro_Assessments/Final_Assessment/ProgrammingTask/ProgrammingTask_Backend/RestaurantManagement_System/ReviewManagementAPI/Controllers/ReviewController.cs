using Microsoft.AspNetCore.Mvc;
using ReviewManagementAPI.Model;
using ReviewManagementAPI.Service;

namespace ReviewManagementAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviews()
        {
            var reviews = await _reviewService.GetReviewsAsync();
            return Ok(reviews);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReview(int id)
        {
            var review = await _reviewService.GetReviewByIdAsync(id);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }

        [HttpPost]
        public async Task<ActionResult<Review>> CreateReview(Review review)
        {
            var createdReview = await _reviewService.CreateReviewAsync(review);
            return CreatedAtAction(nameof(GetReview), new { id = createdReview.ReviewID }, createdReview);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateReview(int id, Review review)
        {
            if (id != review.ReviewID)
            {
                return BadRequest();
            }

            var updatedReview = await _reviewService.UpdateReviewAsync(review);
            if (updatedReview == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var result = await _reviewService.DeleteReviewAsync(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}