import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Item.css';

interface IProps {
  className?: string;
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

const Item: React.FC<IProps> = ({ className, left, center, right, onClick }) => (
  <div className={cx('c-item', className)} onClick={onClick}>
    {left && left}
    {center && center}
    {right && right}
  </div>
);

export default Item;
