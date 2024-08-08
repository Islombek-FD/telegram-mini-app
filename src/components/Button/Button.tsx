import React, { cloneElement, isValidElement } from 'react';
import cx from 'classnames';

import './Button.css';

interface IProps {
  title?: string;
  variant?: 'blue' | 'light-blue' | 'red' | 'white';
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  htmlType?: 'submit' | 'reset' | 'button';
  form?: string;
  className?: string;
  disabled?: boolean;
  container?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  title,
  variant = 'blue',
  size = 'medium',
  block,
  htmlType = 'button',
  form,
  className,
  prefixIcon,
  suffixIcon,
  disabled,
  container,
  onClick,
}) => {
  const resultProps = {
    className: cx(
      'c-btn',
      `variant-${variant}`,
      `size-${size}`,
      block && 'block',
      disabled && 'disabled',
      className,
    ),
    onClick,
    form,
    disabled,
  };

  const resultChildren = (
    <>
      {!!prefixIcon && <div className='c-btn__icon c-btn__prefix-icon'>{prefixIcon}</div>}
      {!!title && <div className='c-btn__title'>{title}</div>}
      {!!suffixIcon && <div className='c-btn__icon c-btn__suffix-icon'>{suffixIcon}</div>}
    </>
  );

  const resultContainer = isValidElement(container) ? container : <button type={htmlType} />;

  return cloneElement(resultContainer, resultProps, resultChildren);
};

export default Button;
