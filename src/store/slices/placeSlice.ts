import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as PlaceTypes from '@/modules/place/types';
import * as PlaceMappers from '@/modules/place/mappers';

type TItem = PlaceTypes.IEntity.Data;

interface ItemsState {
  item: TItem;
}

const initialState: ItemsState = {
  item: PlaceMappers.getData(),
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlace: (state, action: PayloadAction<TItem>) => {
      state.item = action.payload;
    },
    removePlace: state => {
      state.item = initialState.item;
    },
  },
});

export const { setPlace, removePlace } = placeSlice.actions;

export default placeSlice.reducer;
