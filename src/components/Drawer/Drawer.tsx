import React from 'react';
import cx from 'classnames';

import './Drawer.css';

interface IProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

const Drawer: React.FC<IProps> = ({ isOpen, children }) => (
  <div className={cx('c-drawer', isOpen && 'open')}>
    <div className='c-drawer__content'>{!!children && children}</div>
  </div>
);

export default Drawer;
