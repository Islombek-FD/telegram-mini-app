import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store';

import { setPlace, removePlace } from '@/store/slices/placeSlice';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

interface IProps {
  id: number;
}

const useSingle = ({ id }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const initialData = { item: Mappers.getData() } as Types.IQuery.Single;

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.Single,
    string,
    Types.IQuery.Single
  >(
    [Constants.ENTITY, 'single', id],
    async () => {
      const { data } = await Api.Single({ id });

      return {
        item: Mappers.getData(data),
      };
    },
    {
      initialData,
      enabled: !!id,
      onSuccess: data => {
        dispatch(setPlace(data.item));
      },
      onError: () => {
        dispatch(removePlace());
      },
    },
  );

  return { ...args, ...data };
};

export default useSingle;
