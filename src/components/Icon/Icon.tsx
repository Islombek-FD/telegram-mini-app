import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';

import * as List from './list';

import './Icon.css';

export type Type = 'figma';

export type Variant = 'regular';

interface IProps {
  name: string;
  type?: Type;
  variant?: Variant;
  size?: number;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IProps> = ({
  name,
  type = 'figma',
  variant = 'regular',
  size,
  className,
  color,
  onClick,
}) => {
  const Component = get(List, `[${type}][${variant}][${name}]`) as unknown as React.ComponentType;

  if (!Component) {
    console.log('Icon component not found');
    return null;
  }

  return (
    <div
      className={cx('c-icon', className)}
      style={{ ...(size ? { width: size, height: size } : {}), color } as React.CSSProperties}
      {...{ onClick }}
    >
      <Component />
    </div>
  );
};

export default Icon;
