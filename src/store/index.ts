import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import placeReducer from './slices/placeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
