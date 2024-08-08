import React from 'react';

import Icon from '@/components/Icon';
import Title from '@/components/Title';

const Networks: React.FC = () => (
  <>
    <Title text='Bizning ijtimoiy tarmoqlarga havola' />

    <div className='problem__networks'>
      <a href='https://instagram.com' target='_blank' rel='noreferrer'>
        <Icon name='Instagram' size={48} />
      </a>

      <a href='https://twitter.com' target='_blank' rel='noreferrer'>
        <Icon name='Twitter' size={48} />
      </a>

      <a href='https://youtube.com' target='_blank' rel='noreferrer'>
        <Icon name='Youtube' size={48} />
      </a>

      <a href='https://telegram.com' target='_blank' rel='noreferrer'>
        <Icon name='Telegram' size={48} />
      </a>

      <a href='https://facebook.com' target='_blank' rel='noreferrer'>
        <Icon name='Facebook' size={48} />
      </a>
    </div>
  </>
);

export default Networks;
