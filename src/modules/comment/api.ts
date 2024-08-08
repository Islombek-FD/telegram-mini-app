import { AxiosPromise } from 'axios';

import { http } from '@/services';

import * as Types from './types';

export const List = ({ placeId }: { placeId: number }): AxiosPromise<Types.IApi.List.Response> =>
  http.request.get(`/comments/${placeId}/list`);

export const Single = ({ id }: { id: number }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/comments/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/comments/${values.placeId}/create`, {
    user: values.userId,
    star: values.star,
    text: values.text,
  });

export const Update = ({
  id,
  values,
}: {
  id: number;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/comments/${id}/update`, {
    user: values.userId,
    star: values.star,
    text: values.text,
  });

export const Delete = ({ id }: { id: number }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/comments/${id}`);
