import React from 'react';

import { TFileType } from '@/helpers/types';

import Icon from '@/components/Icon';

import './Uploader.css';

interface IProps {
  accept?: string[];
  type: TFileType;
  onSelect: (file: File) => void;
}

const Default: React.FC<IProps> = ({ accept, type, onSelect }) => {
  const icon = {
    image: 'PhotoGroup',
    video: 'VideoAdd',
    file: 'DocumentAdd',
  };

  return (
    <label className='c-uploader__upload'>
      <div className='c-uploader__upload-icon'>
        <Icon name={icon[type]} />
      </div>
      <div className='c-uploader__upload-text'>Rasm qo’shish</div>
      <div className='c-uploader__upload-btn'>
        <input
          type='file'
          multiple={false}
          accept={accept && accept.join(',')}
          onChange={({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
            const file = files && files[0];

            if (file) {
              onSelect(file);
            }
          }}
        />
      </div>
    </label>
  );
};

export default Default;
