import React from 'react';
import "./Rating.module.css";

const ReviewBox = (props) => {
  const { rating } = props;

  // Function to create an array of stars based on the rating
  const createStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      // Determine if the star should be filled or empty based on the rating
      const isFilled = i <= rating;

      // Apply styling based on whether the star is filled or empty
      const starStyle = {
        color: isFilled ? 'gold' : 'lightgray',
      };

      // Render the star
      stars.push(<span key={i} style={starStyle}>★</span>);
    }
    return stars;
  };

  return (
    <div>
    {/* Call the createStars function to render the stars */}
    {createStars()}
    </div>
  );
};

export default ReviewBox;
