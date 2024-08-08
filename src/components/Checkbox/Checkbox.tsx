import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import './Checkbox.css';

export interface IProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

const Checkbox: React.FC<IProps> = ({ checked, disabled, onChange }) => (
  <div
    className={cx('c-checkbox', disabled && 'disabled', checked && 'checked')}
    onClick={() => {
      if (!disabled) {
        onChange && onChange(!checked);
      }
    }}
  >
    <div className='c-checkbox__icon'>
      <Icon name='Check' size={16} />
    </div>
  </div>
);

export default Checkbox;
