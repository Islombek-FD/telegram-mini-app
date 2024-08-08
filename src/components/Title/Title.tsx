import React from 'react';
import cx from 'classnames';

import './Title.css';

interface IProps {
  className?: string;
  text: string;
}

const Title: React.FC<IProps> = ({ className, text }) => (
  <h3 className={cx('c-title', className && className)}>{text}</h3>
);

export default Title;
