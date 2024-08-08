import { useQuery } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

interface IProps {
  id: number;
}

const useSingle = ({ id }: IProps) => {
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
    { initialData, enabled: !!id },
  );

  return { ...args, ...data };
};

export default useSingle;
