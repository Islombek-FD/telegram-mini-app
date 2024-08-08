import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '@/store';

import ProblemItem from '@/containers/ProblemItem';

import Icon from '@/components/Icon';
import Item from '@/components/Item';
import Title from '@/components/Title';

import './General.css';

const General: React.FC = () => {
  const navigate = useNavigate();
  const item = useSelector((state: RootState) => state.place.item);

  const data = useMemo(
    () => [
      {
        title: 'Joy ma’lumotlari',
        items: [
          {
            icon: 'Location',
            iconColor: '#007AFF',
            key: 'Manzil',
            value: item.fullAddress,
            onClick: () => {},
          },
          {
            icon: 'Car',
            iconColor: '#FF9500',
            key: 'Manzilgacha Yandex-taxi',
            value: '4km • 15-20 min • 20,000 so’m',
            onClick: () => {},
          },
          {
            icon: 'Phone',
            iconColor: '#007AFF',
            key: 'Aloqa raqami',
            value: item.phone,
            onClick: () => {},
          },
          {
            icon: 'Phone',
            iconColor: '#007AFF',
            key: 'Qo’shimcha aloqa raqami',
            value: item.phone2,
            onClick: () => {},
          },
          {
            icon: 'Network',
            iconColor: '#34C759',
            key: 'Web sayti',
            value: item.website,
            onClick: () => {},
          },
        ],
      },
      {
        title: 'Ishlash vaqtlari va qulayliklar',
        items: [
          {
            icon: 'Clock',
            iconColor: '#007AFF',
            key: 'Ishlash vaqtlari',
            value: `Ochiq • ${item.workStartTime} - ${item.workEndTime}`,
            onClick: () => navigate('/place/work-times'),
          },
          {
            icon: 'PuzzlePiece',
            iconColor: '#FF9500',
            key: 'Qulayliklar',
            value: 'Wi-fi • Karta orqali to’lash • Halol',
            onClick: () => navigate('/place/amenities'),
          },
        ],
      },
    ],
    [item],
  );

  return (
    <div className='general'>
      {data.map((row, index) => (
        <div className='general__item-group' key={index}>
          <Title text={row.title} />

          <div className='general__items'>
            {row.items.map(item => (
              <Item
                className='general__item'
                left={
                  <div className='general__item-icon' style={{ backgroundColor: item.iconColor }}>
                    <Icon name={item.icon} color='#ffffff' size={28} />
                  </div>
                }
                center={
                  <div className='general__item-info'>
                    <div>
                      <strong className='general__item-key'>{item.key}</strong>
                      <span className='general__item-value'>{item.value}</span>
                    </div>
                    <div>
                      <Icon name='ChevronRight' color='#7F7F7F' size={24} />
                    </div>
                  </div>
                }
                onClick={item.onClick}
                key={item.key}
              />
            ))}
          </div>
        </div>
      ))}

      <div className='general__item-group'>
        <Title text='Ijtimoiy tarmoqlarga havola' />

        <div className='general__networks'>
          {item.instagram && (
            <a href={item.instagram} target='_blank' rel='noreferrer'>
              <Icon name='Instagram' size={48} />
            </a>
          )}

          {item.twitter && (
            <a href={item.twitter} target='_blank' rel='noreferrer'>
              <Icon name='Twitter' size={48} />
            </a>
          )}

          {item.youtube && (
            <a href={item.youtube} target='_blank' rel='noreferrer'>
              <Icon name='Youtube' size={48} />
            </a>
          )}

          {item.telegram && (
            <a href={item.telegram} target='_blank' rel='noreferrer'>
              <Icon name='Telegram' size={48} />
            </a>
          )}

          {item.facebook && (
            <a href={item.facebook} target='_blank' rel='noreferrer'>
              <Icon name='Facebook' size={48} />
            </a>
          )}
        </div>
      </div>

      <div className='general__item-group'>
        <Title text='Joy xaqida' />

        <div className='general__info'>
          <p className='general__info-text' dangerouslySetInnerHTML={{ __html: item.info }} />
        </div>
      </div>

      <div className='general__item-group'>
        <Title text='Biz bilan aloqa' />

        <ProblemItem />
      </div>
    </div>
  );
};

export default General;
