import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import Empty from '@/components/Empty';

import './Image.css';

const Image: React.FC = () => {
  const { images } = useSelector((state: RootState) => state.place.item);

  return (
    <div className='image'>
      {!images?.length ? (
        <Empty icon='NoImage' description="Hozircha rasmlar yo'q" />
      ) : (
        <div className='image__list'>
          {images?.map(item => (
            <div className='image__item' key={item.id}>
              <img src={item.image} alt='' width={126} height={126} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Image;
