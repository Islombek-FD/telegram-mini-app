import React from 'react';

import { TFileType } from '@/helpers/types';

import Icon from '@/components/Icon';

import './Uploader.css';

interface IProps {
  type: TFileType;
  percent: number;
  total: string;
  loaded: string;
  onCancel: () => void;
}

const Progress: React.FC<IProps> = ({ type, percent, total, loaded, onCancel }) => {
  const title = {
    image: 'Rasm yuklanayabdi',
    video: 'Video yuklanayabdi',
    file: 'Fayl yuklanayabdi',
  };

  return (
    <div className='c-uploader__progress'>
      <div className='c-uploader__progress-header'>
        <div className='c-uploader__progress-title'>{title[type]}</div>
        <div className='c-uploader__progress-percent'>{percent}%</div>
        <div className='c-uploader__progress-cancel' onClick={() => onCancel()}>
          <Icon name='DismissCircle' />
        </div>
      </div>
      <div className='c-uploader__progress-bar'>
        <div className='c-uploader__progress-bar-inner' style={{ width: `${percent}%` }} />
      </div>
      <div className='c-uploader__progress-info'>
        Yuklangan: {loaded} kb dan {total} kb
      </div>
    </div>
  );
};

export default Progress;
