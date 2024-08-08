import React from 'react';
import cx from 'classnames';

import { TFileType } from '@/helpers/types';

import Default from './Default';
import Preview from './Preview';
import Progress from './Progress';

import './Uploader.css';

interface IProps {
  state?: string;
  accept?: string[];
  type: TFileType;
  onSelect: (file: File) => void;
  file?: {
    name: string;
    source: string;
    size: string;
    extension: string;
    onRemove: () => void;
  };
  progress?: {
    percent: number;
    total: string;
    loaded: string;
    onCancel: () => void;
  };
  message?: string;
}

const Uploader: React.FC<IProps> = ({
  state = 'default',
  accept,
  type,
  onSelect,
  file,
  progress,
  message,
}) => {
  let content;

  if (state === 'progress' && progress) {
    content = <Progress {...{ type }} {...progress} />;
  } else if (state === 'preview' && file) {
    content = <Preview {...{ type }} {...file} />;
  } else {
    content = <Default {...{ accept, type, onSelect }} />;
  }

  return (
    <div className={cx('c-uploader', state && `state-${state}`)}>
      <div className='c-uploader__content'>{content}</div>
      {!!message && <div className='message'>{message}</div>}
    </div>
  );
};

export default Uploader;
