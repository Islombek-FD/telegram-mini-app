import React, { useState } from 'react';
import moment from 'moment';
import cx from 'classnames';

import config from '@/config';

import { useSingle } from '@/modules/place/hooks';

import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

import Image from './components/Image';
import Spacer from '@/components/Spacer';
import General from './components/General';
import Comment from './components/Comment';
import Discount from './components/Discount';
import PlaceCard from '@/components/PlaceCard';

import './Place.css';

enum TABS {
  GENERAL = 'GENERAL',
  COMMENT = 'COMMENT',
  IMAGES = 'IMAGES',
  DISCOUNT = 'DISCOUNT',
}

const Pace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TABS>(TABS.GENERAL);

  const { item, isFetched } = useSingle({ id: config.app.placeId });

  const tabs = {
    [TABS.GENERAL]: 'Umimiy',
    [TABS.COMMENT]: 'Sharhlar',
    [TABS.IMAGES]: 'Rasmlar',
    [TABS.DISCOUNT]: 'Aksiyalar',
  };

  const contents = {
    [TABS.GENERAL]: <General />,
    [TABS.COMMENT]: <Comment />,
    [TABS.IMAGES]: <Image />,
    [TABS.DISCOUNT]: <Discount />,
  };

  if (!isFetched) {
    return (
      <div className='place__spinner'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='place'>
      <div className='place__head'>
        <img src={item.image} alt={item.name} width='100%' height={260} />

        {/* TODO: API dan chegirma kelmayabdi */}
        <div className='place__head-discount'>-20% gacha chegirma</div>

        <div className='place__head-time'>
          {Math.floor(
            moment
              .duration(moment(item.workEndTime, 'HH:mm').diff(moment(item.workStartTime, 'HH:mm')))
              .asHours() || 0,
          )}{' '}
          soat ochiq
        </div>

        <div className='place__head-icons'>
          <div className='place__head-icon'>
            <Icon name='Heart' color='#ffffff' size={24} />
          </div>
          <div className='place__head-icon'>
            <Icon name='Share' color='#ffffff' size={24} />
          </div>
        </div>
      </div>

      <div className='place__body'>
        <PlaceCard>
          <Spacer size={32} />

          <Button title='Joy buyurtma qilish' block />
        </PlaceCard>

        <ul className='place__tabs'>
          {Object.keys(tabs).map(key => (
            <li
              className={cx('place__tab', activeTab === key && 'active')}
              onClick={() => setActiveTab(key as TABS)}
              key={key}
            >
              {tabs[key as TABS]}
            </li>
          ))}
        </ul>

        {contents[activeTab]}
      </div>
    </div>
  );
};

export default Pace;
