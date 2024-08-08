import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

interface IProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProps> = ({ children }) => (
  <Provider {...{ store }}>{children}</Provider>
);

export default StoreProvider;
