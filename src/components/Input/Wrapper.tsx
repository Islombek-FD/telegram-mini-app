import React, { ReactNode } from 'react';
import cx from 'classnames';

import { WrapperProps } from './Types';

import './Input.css';

interface IProps extends WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<IProps> = ({
  size,
  state,
  disabled,
  isFocused,
  prefix,
  suffix,
  prefixIcon,
  onPrefixIcon,
  suffixIcon,
  onSuffixIcon,
  message,
  children,
}) => (
  <label
    className={cx(
      'c-input',
      size && `size-${size}`,
      state && `state-${state}`,
      isFocused && 'focused',
      disabled && 'disabled',
    )}
  >
    {!!prefixIcon && (
      <div
        className={cx('c-input__icon', 'prefix-icon')}
        onClick={() => onPrefixIcon && onPrefixIcon()}
      >
        {prefixIcon}
      </div>
    )}
    {!!prefix && <div className='c-input__prefix'>{prefix}</div>}
    {children}
    {!!suffix && <div className='c-input__suffix'>{suffix}</div>}
    {!!suffixIcon && (
      <div
        className={cx('c-input__icon', 'suffix-icon')}
        onClick={() => onSuffixIcon && onSuffixIcon()}
      >
        {suffixIcon}
      </div>
    )}
    {!!message && <div className='message'>{message}</div>}
  </label>
);

export default Wrapper;
