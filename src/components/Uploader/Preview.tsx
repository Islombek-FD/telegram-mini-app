import React from 'react';
import cx from 'classnames';

import { TFileType } from '@/helpers/types';

import Icon from '@/components/Icon';

import './Uploader.css';

interface IProps {
  type: TFileType;
  source: string;
  onRemove: () => void;
}

const Preview: React.FC<IProps> = ({ type, source, onRemove }) => (
  <div className='c-uploader__preview'>
    <div className='c-uploader__preview-image'>
      {type === ('image' || 'video' || 'file') ? (
        <img src={source} alt='General preview' />
      ) : (
        <div className={cx('file-type', `file-type--${type}`)} />
      )}
    </div>
    <div className='c-uploader__preview-btns'>
      <a className='c-uploader__preview-btn' href={source}>
        <Icon name='DownloadArrow' size={20} />
      </a>
      <div className='c-uploader__preview-btn' onClick={() => onRemove()}>
        <Icon name='Delete' size={20} />
      </div>
    </div>
  </div>
);

export default Preview;
