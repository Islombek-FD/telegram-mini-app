import React from 'react';
import TextareaBase from 'react-textarea-autosize';
import cx from 'classnames';

import './Textarea.css';

export interface IProps {
  id: string;
  value: string;
  state?: 'default' | 'success' | 'error';
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  maxRows?: number;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  message?: string | undefined;
}

const Textarea: React.FC<IProps> = ({
  id,
  value,
  state = 'default',
  placeholder,
  disabled,
  rows = 5,
  onChange,
  onBlur,
  message,
  maxRows,
}) => (
  <div className={cx('c-textarea', state && `state-${state}`)}>
    <TextareaBase
      className='c-textarea__content'
      {...{ id, value, placeholder, disabled, maxRows, minRows: rows }}
      onChange={e => onChange && onChange(e.target.value)}
      onBlur={e => onBlur && onBlur(e.target.value)}
    >
      {value}
    </TextareaBase>
    {!!message && <div className='message'>{message}</div>}
  </div>
);

export default Textarea;
