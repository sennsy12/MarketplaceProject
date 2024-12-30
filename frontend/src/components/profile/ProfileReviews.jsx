const ProfileReviews = () => {
    const mockReviews = [
      {
        id: 1,
        reviewer: "Alice Johnson",
        rating: 5,
        comment: "Great seller! Fast shipping and item as described.",
        date: "2024-01-15"
      },
      {
        id: 2,
        reviewer: "Bob Wilson",
        rating: 4,
        comment: "Good communication and fair prices.",
        date: "2024-01-10"
      }
    ];
  
    return (
      <div>
        <h2 className="text-xl lg:text-2xl font-bold mb-6">My Reviews</h2>
        <div className="space-y-4">
          {mockReviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-3 lg:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-${i < review.rating ? 'yellow' : 'gray'}-400`}>★</span>
                  ))}
                </div>
                <span className="font-semibold text-sm lg:text-base">{review.reviewer}</span>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">{review.comment}</p>
              <p className="text-xs lg:text-sm text-gray-400 mt-2">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfileReviews;
  