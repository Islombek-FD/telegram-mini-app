import React from 'react';

import './Label.css';

export interface IProps {
  title: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Label: React.FC<IProps> = ({ title, required, children }) => (
  <div className='c-label'>
    <div className='c-label__header'>
      {required && <span className='c-label__icon'>*</span>}
      <span className='c-label__title'>{title}</span>
    </div>
    {!!children && <div className='c-label__content'>{children}</div>}
  </div>
);

export default Label;
