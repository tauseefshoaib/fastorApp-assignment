import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RestaurantListType, RestaurantType} from './restaurantTypes';

const initialState: RestaurantType = {
  restaurantListData: [],
};

export const {name, reducer, actions} = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    updateAddRestaurantListData: (
      state,
      action: PayloadAction<RestaurantListType[]>,
    ) => {
      state.restaurantListData = action.payload;
    },
  },
});
