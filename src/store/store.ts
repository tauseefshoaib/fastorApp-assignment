import {configureStore} from '@reduxjs/toolkit';
import {
  name as loginName,
  reducer as loginReducer,
} from '../screens/Login/loginSlice';
import {
  name as restaurantName,
  reducer as restaurantReducer,
} from '../screens/Restaurant/restaurantSlice';

export const store = configureStore({
  reducer: {
    [loginName]: loginReducer,
    [restaurantName]: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
