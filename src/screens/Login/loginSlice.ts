import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  FieldNameValuePayloadTypes,
  LoggedInUserDetailsType,
  LoginType,
} from './loginTypes';

const initialState: LoginType = {
  register: {
    phone: '',
    dial_code: '+91',
  },

  loggedInUserDetails: undefined,
};

export const {name, reducer, actions} = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateAddRegisterDetails: (
      state,
      action: PayloadAction<FieldNameValuePayloadTypes>,
    ) => {
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.type]: action.payload.value,
        },
      };
    },

    updateAddLoggedInUserDetails: (
      state,
      action: PayloadAction<LoggedInUserDetailsType>,
    ) => {
      state.loggedInUserDetails = action.payload;
    },

    // To clear all the data to initial state
    clearData: () => {
      return initialState;
    },
  },
});
