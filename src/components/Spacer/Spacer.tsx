import React from 'react';

import './Spacer.css';

interface IProps {
  size?: number;
}

const Spacer: React.FC<IProps> = ({ size = 0 }) => (
  <div
    className='c-spacer'
    style={
      {
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      } as React.CSSProperties
    }
  />
);

export default Spacer;
