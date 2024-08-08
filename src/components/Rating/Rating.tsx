import React from 'react';

import Icon from '@/components/Icon';

import './Rating.css';

interface IProps {
  rating: number;
  onClick?: (star: number) => void;
  size?: number;
}

const Rating: React.FC<IProps> = ({ rating, onClick, size = 24 }) => (
  <div className='c-rating'>
    {[1, 2, 3, 4, 5].map(star => (
      <Icon
        name='Star'
        onClick={() => {
          onClick && onClick(star);
        }}
        color={rating >= star ? '#FF9500' : '#8E8E93'}
        size={size}
        key={star}
      />
    ))}
  </div>
);

export default Rating;
