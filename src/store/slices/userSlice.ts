import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as UserTypes from '@/modules/user/types';
import * as UserMappers from '@/modules/user/mappers';

type TItem = UserTypes.IEntity.Data;

interface ItemsState {
  item: TItem;
}

const initialState: ItemsState = {
  item: UserMappers.getData(),
};

const userSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TItem>) => {
      state.item = action.payload;
    },
    removeUser: state => {
      state.item = { ...initialState.item };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
