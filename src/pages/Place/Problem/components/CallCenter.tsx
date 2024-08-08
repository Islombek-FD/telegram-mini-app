import React from 'react';

import Icon from '@/components/Icon';
import Item from '@/components/Item';
import Title from '@/components/Title';

const CallCenter: React.FC = () => (
  <>
    <Title text='Call center' />

    <div className='problem__items'>
      <Item
        left={
          <div className='problem__item-icon blue'>
            <Icon name='Phone' color='#ffffff' size={28} />
          </div>
        }
        center={
          <div className='problem__item-info'>
            <strong className='problem__item-key'>Aloqa raqami</strong>
            <span className='problem__item-value'>+998 (88) 999-99-77</span>
          </div>
        }
        onClick={() => {}}
      />

      <Item
        left={
          <div className='problem__item-icon green'>
            <Icon name='Network' color='#ffffff' size={28} />
          </div>
        }
        center={
          <div className='problem__item-info'>
            <strong className='problem__item-key'>Web sayti</strong>
            <span className='problem__item-value'>www.truegis.uz</span>
          </div>
        }
        onClick={() => {}}
      />
    </div>
  </>
);

export default CallCenter;
