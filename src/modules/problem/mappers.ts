import get from 'lodash/get';

import * as Types from './types';

export const getData = (item?: any): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  placeId: get(item, 'place') || null,
  userId: get(item, 'user') || null,
  text: get(item, 'text') || '',
});
