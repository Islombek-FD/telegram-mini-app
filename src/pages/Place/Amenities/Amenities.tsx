import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import ProblemItem from '@/containers/ProblemItem';

import Title from '@/components/Title';
import PlaceCard from '@/components/PlaceCard';

import './Amenities.css';

const Amenities: React.FC = () => {
  const place = useSelector((state: RootState) => state.place.item);

  return (
    <div className='amenities'>
      <PlaceCard />

      <Title text='Joy qulayliklari' />

      <div className='amenities__items'>
        <div className='amenities__item'>
          <span className='amenities__item-key green'>Ochiq</span>
          <span className='amenities__item-value'>{`${place.workStartTime} - ${place.workEndTime}`}</span>
        </div>

        {place.workDays.map(item => (
          <div className='amenities__item' key={item.dayOfWeek}>
            <span className='amenities__item-key'></span>
            <span className='amenities__item-value'>{`${item.startTime} - ${item.endTime}`}</span>
          </div>
        ))}
      </div>

      <ProblemItem />
    </div>
  );
};

export default Amenities;
