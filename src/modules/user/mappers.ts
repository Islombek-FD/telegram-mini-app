import get from 'lodash/get';

import * as Types from './types';

export const getData = (item?: any): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  fullName: get(item, 'full_name') || '',
  username: get(item, 'username') || '',
  telegramId: get(item, 'telegram_id') || '',
  lang: get(item, 'lang') || '',
  profilePhotoUrl: get(item, 'profile_photo_url') || '',
  phone: get(item, 'phone') || '',
});
