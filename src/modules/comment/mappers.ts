import get from 'lodash/get';
import moment from 'moment';

import * as UserMappers from '@/modules/user/mappers';

import * as Types from './types';

export const getData = (item?: any): Types.IEntity.Data => {
  const createdTime = moment(get(item, 'created_time'), 'YYYY-MM-DD HH:mm:ss');

  return {
    id: get(item, 'id') || '',
    placeId: get(item, 'place') || null,
    user: UserMappers.getData(get(item, 'user')),
    star: get(item, 'star') || 0,
    text: get(item, 'text') || '',
    createdTime:
      get(item, 'created_time') && createdTime.isValid() ? createdTime.format('DD.MM.YYYY') : '',
  };
};
