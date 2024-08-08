import get from 'lodash/get';
import { useQuery } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

interface IProps {
  placeId: number;
}

const useList = ({ placeId }: IProps) => {
  const initialData = { items: [] } as Types.IQuery.List;

  const { data = initialData, ...args } = useQuery<Types.IQuery.List, string, Types.IQuery.List>(
    [Constants.ENTITY, 'list', placeId],
    async () => {
      const { data } = await Api.List({ placeId });

      const items = (get(data, 'results') || []).map(Mappers.getData);

      return { items };
    },
    { initialData, keepPreviousData: true, enabled: !!placeId },
  );

  return { ...data, ...args };
};

export default useList;
