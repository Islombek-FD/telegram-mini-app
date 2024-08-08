import { AxiosPromise, CancelToken } from 'axios';

import { http } from '@/services';

import * as Types from './types';

export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/file/${id}`);

export const Upload = ({
  values,
  onUploadProgress,
  cancelToken,
}: {
  values: Types.IForm.Upload;
  onUploadProgress: (e: any) => void;
  cancelToken: CancelToken;
}): AxiosPromise<Types.IApi.Single.Response> => {
  const data = new FormData();

  data.append(values.type, values.file);
  data.append('place', values.placeId.toString());
  data.append('user', values.userId.toString());

  return http.request.post(`/${values.type}`, data, {
    onUploadProgress,
    cancelToken,
  });
};

export const Download = ({ uuid }: { uuid: string }): AxiosPromise<Types.IApi.Single.Response> => {
  return http.request.get(`/file/download/${uuid}`, {
    responseType: 'blob',
  });
};

export const Delete = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/file/${id}`);
