import get from 'lodash/get';
import moment from 'moment';

import * as Types from './types';

export const getData = (item?: any): Types.IEntity.Data => {
  const workStartTime = moment(get(item, 'work_start_time'), 'HH:mm:ss');
  const workEndTime = moment(get(item, 'work_end_time'), 'HH:mm:ss');

  return {
    id: get(item, 'id') || '',
    images: (get(item, 'images') || []).map(getImage),
    image: get(item, 'image') || '',
    delivery: get(item, 'delivery') || false,
    placeId: get(item, 'place_id') || '',
    logo: get(item, 'logo') || '',
    name: get(item, 'name') || '',
    phone: get(item, 'phone') || '',
    phone2: get(item, 'phone2') || '',
    photoUrl: get(item, 'photo_url') || '',
    latitude: get(item, 'latitude') || '',
    longitude: get(item, 'longitude') || '',
    placeType: get(item, 'place_type') || '',
    rating: get(item, 'rating') || 0,
    workStartTime:
      get(item, 'work_start_time') && workStartTime.isValid() ? workStartTime.format('HH:mm') : '',
    workEndTime:
      get(item, 'work_end_time') && workEndTime.isValid() ? workEndTime.format('HH:mm') : '',
    workDays: (get(item, 'work_days') || []).map(getWorkDay),
    status: get(item, 'status') || false,
    freeWifi: get(item, 'free_wifi') || '',
    website: get(item, 'website') || '',
    instagram: get(item, 'instagram') || '',
    telegram: get(item, 'telegram') || '',
    telegramBot: get(item, 'telegram_bot') || '',
    facebook: get(item, 'facebook') || '',
    twitter: get(item, 'twitter') || '',
    youtube: get(item, 'youtube') || '',
    street: get(item, 'street') || '',
    info: get(item, 'info') || '',
    fullAddress: get(item, 'full_address') || '',
    timezone: get(item, 'timezone') || '',
    about: get(item, 'about') || [],
    district: get(item, 'district') || '',
    city: get(item, 'city') || '',
    country: get(item, 'country') || '',
    workingHours: get(item, 'working_hours') || '',
    type: get(item, 'type') || '',
  };
};

export const getImage = (item?: any): Types.IEntity.Image => ({
  id: get(item, 'id') || '',
  image: get(item, 'image') || '',
  created: get(item, 'created') || '',
  placeId: get(item, 'placeId') || '',
  userId: get(item, 'user') || '',
});

export const getWorkDay = (item?: any): Types.IEntity.WorkDay => ({
  endTime: get(item, 'endTime') || '',
  dayOfWeek: get(item, 'dayOfWeek') || '',
  startTime: get(item, 'startTime') || '',
});
