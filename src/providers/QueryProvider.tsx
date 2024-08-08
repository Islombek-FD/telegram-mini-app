import React from 'react';
import * as ReactQuery from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import get from 'lodash/get';

import config from '@/config';

import { MESSAGE_TYPE } from '@/helpers/enums';

const queryResponseHandler = (data: any) => {
  const type = get(data, 'data.type');
  const message = get(data, 'data.message');
  const status = get(data, 'data.status');

  if (type && message) {
    const props = {
      key: status,
      message: message,
    };

    console.log(props);

    // TODO: Global notifications
    if (type === MESSAGE_TYPE.INFO) {
      // notification.info(props);
    } else if (type === MESSAGE_TYPE.WARNING) {
      // notification.warning(props);
    } else if (type === MESSAGE_TYPE.ERROR) {
      // notification.error(props);
    }
  }
};

export const queryClient = new ReactQuery.QueryClient({
  queryCache: new ReactQuery.QueryCache({
    onSuccess: queryResponseHandler,
    onError: queryResponseHandler,
  }),
  mutationCache: new ReactQuery.MutationCache({
    onSuccess: queryResponseHandler,
    onError: queryResponseHandler,
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

interface IProps {
  children: React.ReactNode;
}

const QueryProvider: React.FC<IProps> = ({ children }) => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    {children}
    {config.app.isDev && <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />}
  </ReactQuery.QueryClientProvider>
);

export default QueryProvider;
