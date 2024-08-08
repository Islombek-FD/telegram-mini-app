import { AxiosPromise } from 'axios';

import { http } from '@/services';

import * as Types from './types';

export const Send = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/problem/${values.placeId}/send`, {
    user: values.userId,
    text: values.text,
  });
