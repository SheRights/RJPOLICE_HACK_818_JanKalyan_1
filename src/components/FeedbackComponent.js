import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';

const FeedbackComponent = ({ onRatingChange }) => {
  const [starCount, setStarCount] = useState(3.5);

  const onStarRatingPress = (rating) => {
    setStarCount(rating);
    onRatingChange(Math.ceil(rating));
  };

  return (
    <StarRating
      disabled={false}
      maxStars={5}
      rating={starCount}
      selectedStar={(rating) => onStarRatingPress(rating)}
    />
  );
};

export default FeedbackComponent;
