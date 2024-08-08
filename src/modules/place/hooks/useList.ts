import get from 'lodash/get';
import { useQuery } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

const useList = () => {
  const initialData = { items: [] } as Types.IQuery.List;

  const { data = initialData, ...args } = useQuery<Types.IQuery.List, string, Types.IQuery.List>(
    [Constants.ENTITY, 'list'],
    async () => {
      const { data } = await Api.List();

      const items = (get(data, 'data') || []).map(Mappers.getData);

      return { items };
    },
    { initialData, keepPreviousData: true },
  );

  return { ...data, ...args };
};

export default useList;
