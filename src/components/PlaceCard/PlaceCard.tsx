import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import Rating from '@/components/Rating';

import './PlaceCard.css';

interface IProps {
  children?: ReactNode;
}

const PlaceCard: React.FC<IProps> = ({ children }) => {
  const place = useSelector((state: RootState) => state.place.item);

  return (
    <div className='c-place-card'>
      <div className='c-place-card__info'>
        <img src={place.logo} alt={place.name} width={56} height={56} />

        <div>
          <h2 className='c-place-card__title'>{place.name}</h2>
          <div className='c-place-card__rating'>
            <Rating rating={place.rating} />
            {/* TODO: API dan sharhlar soni kelmayabdi */}
            <p className='c-place-card__description'>{place.rating} (100 sharhlar)</p>
          </div>
        </div>
      </div>

      {!!children && children}
    </div>
  );
};

export default PlaceCard;
