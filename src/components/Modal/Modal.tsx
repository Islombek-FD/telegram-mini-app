import React from 'react';
import cx from 'classnames';

import './Modal.css';

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ isOpen, children }) => (
  <div className={cx('c-modal', isOpen && 'open')}>
    <div className='c-modal__content'>{!!children && children}</div>
  </div>
);

export default Modal;
