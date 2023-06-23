'use client ';
import React, { useState } from 'react';
import { CustomFlowbiteTheme, Flowbite, Rating as FlowbiteRating } from 'flowbite-react';

export interface IRatingProps {
  className?: string;
  totalStar: number;
  filledStar: number;
  isEditable?: boolean;
}

const theme: CustomFlowbiteTheme = {
  rating: {
    star: {
      filled: 'text-primary',
    },
  },
};

export default function Rating({ className, totalStar, filledStar, isEditable = false }: IRatingProps) {
  const [filledStars, setFilledStars] = useState(filledStar);

  const handleStarClick = (starIndex: number) => {
    if (isEditable) {
      setFilledStars(starIndex + 1);
    }
  };

  const start = [];

  for (let i = 0; i < totalStar; i++) {
    const isFilled = i < filledStars;
    start.push(
      <FlowbiteRating.Star
        className={`${isEditable ? 'hover:cursor-pointer' : ''}`}
        key={i}
        filled={isFilled}
        onClick={() => handleStarClick(i)}
      />
    );
  }

  return (
    <Flowbite theme={{ theme: theme }}>
      <FlowbiteRating className={className}>{start}</FlowbiteRating>
    </Flowbite>
  );
}
