import React, { useMemo } from 'react';

import ProblemItem from '@/containers/ProblemItem';

import Icon from '@/components/Icon';
import Title from '@/components/Title';
import PlaceCard from '@/components/PlaceCard';

import './Amenities.css';

const Amenities: React.FC = () => {
  const items = useMemo(
    () => [
      {
        icon: 'Wifi',
        name: 'Wi-fi',
        value: 'Mavjud',
      },
      {
        icon: 'PaymentCard',
        name: 'Karta orqali to’lov',
        value: 'Mavjud',
      },
      {
        icon: 'Car',
        name: 'Bepul parking',
        value: 'Mavjud',
      },
      {
        icon: 'Toilet',
        name: 'Hojatxona',
        value: 'Mavjud',
      },
      {
        icon: 'BabyCarriage',
        name: 'Bolalar xonasi',
        value: 'Mavjud',
      },
      {
        icon: 'RestRoom',
        name: 'Dam olish xonasi',
        value: 'Mavjud',
      },
    ],
    [],
  );

  return (
    <div className='amenities'>
      <PlaceCard />

      <Title text='Joy qulayliklari' />

      <div className='amenities__items'>
        {items.map((item, index) => (
          <div className='amenities__item' key={index}>
            <div className='amenities__item-icon'>
              <Icon name={item.icon} color='#ffffff' />
            </div>
            <div className='amenities__item-info'>
              <span className='amenities__item-name'>{item.name}</span>
              <span className='amenities__item-value'>{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <ProblemItem />
    </div>
  );
};

export default Amenities;
