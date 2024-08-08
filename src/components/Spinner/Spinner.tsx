import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import './Spinner.css';

interface IProps {
  full?: boolean;
  color?: string;
  size?: number;
}

const Spinner: React.FC<IProps> = ({ full, color, size = 52 }) => (
  <div className={cx('c-spinner', full && 'full')}>
    <Icon name='Spinner' {...{ color, size }} />
  </div>
);

export default Spinner;
