import React from 'react';

import Icon from '@/components/Icon';

import './Empty.css';

interface IProps {
  icon: string;
  description: string;
}

const Empty: React.FC<IProps> = ({ icon, description }) => (
  <div className='c-empty'>
    <div>
      <Icon name={icon} />
    </div>
    <p className='c-empty__description'>{description}</p>
  </div>
);

export default Empty;
