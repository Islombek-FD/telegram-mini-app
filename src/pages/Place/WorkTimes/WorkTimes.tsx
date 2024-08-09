import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import ProblemItem from '@/containers/ProblemItem';

import Title from '@/components/Title';
import PlaceCard from '@/components/PlaceCard';

import './WorkTimes.css';

const WorkTimes: React.FC = () => {
  const place = useSelector((state: RootState) => state.place.item);

  const days = useMemo(
    () => ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
    [],
  );

  return (
    <div className='work-times'>
      <PlaceCard />

      <Title text='Ishlash vaqtlari' />

      <div className='work-times__items'>
        <div className='work-times__item'>
          <span className='work-times__item-key green'>Ochiq</span>
          <span className='work-times__item-value'>{`${place.workStartTime || '09:00'} - ${place.workEndTime || '18:00'}`}</span>
        </div>

        {place.workDays.map(item => (
          <div className='work-times__item' key={item.dayOfWeek}>
            <span className='work-times__item-key'>{days[item.dayOfWeek - 1]}</span>
            <span className='work-times__item-value'>{`${item.startTime} - ${item.endTime}`}</span>
          </div>
        ))}
      </div>

      <ProblemItem />
    </div>
  );
};

export default WorkTimes;
