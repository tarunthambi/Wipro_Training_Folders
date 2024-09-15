import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported

const Rating = ({ initialRating = 0, onRatingChange, isLocked = false }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (value) => {
    if (!isLocked) {
      setRating(value);
      onRatingChange(value);
    }
  };

  return (
    <div className="text-center mt-3">
      {[1, 2, 3, 4, 5].map((value) => (
        <i
          key={value}
          className={`fa${value <= rating ? 's' : 'r'} fa-star ${value <= rating ? 'text-warning' : 'text-secondary'} cursor-pointer`}
          onClick={() => handleClick(value)}
          style={{ fontSize: '2rem', margin: '0 5px' }}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
