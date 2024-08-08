import { AxiosPromise } from 'axios';

import { http } from '@/services';

import * as Types from './types';

export const List = (): AxiosPromise<Types.IApi.List.Response> => http.request.get(`/place/list`);

export const Single = ({ id }: { id: number }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/place/${id}`);
