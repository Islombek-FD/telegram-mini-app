import get from 'lodash/get';

import config from '@/config';

import { FILE_TYPE } from '@/helpers/enums';
import { IFile, IMeta } from '@/helpers/interfaces';

export const getMeta = (item?: any): IMeta => ({
  totalPages: get(item, 'totalPages') || 0,
  totalItems: get(item, 'totalCount') || 0,
  current: get(item, 'page') ? get(item, 'page') + 1 : 1,
  perPage: get(item, 'size') || 1,
});

export const getFile = (item?: any): IFile => {
  const uuid = get(item, 'uuid') || '';
  const type: 'image' | 'video' | 'audio' = get((get(item, 'type') || '').split('/'), '[0]') || '';

  const types = {
    image: FILE_TYPE.IMAGE,
    video: FILE_TYPE.VIDEO,
    audio: FILE_TYPE.AUDIO,
  };

  return {
    id: get(item, 'id') || '',
    name: get(item, 'name') || '',
    url: `${config.api.baseUrl}/file/download/${uuid}`,
    size: getFileSize(get(item, 'size') || 0),
    type: types[type]! || FILE_TYPE.FILE,
    extension: get(item, 'extension') || '',
    uuid,
  };
};

export const getFileSize = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
