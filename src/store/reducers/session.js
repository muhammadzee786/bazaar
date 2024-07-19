import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  token: '',
  tokenType: '',
  isAdmin: false,
  isLoggedIn: false,
  user: null,
};

const callbacks = {};

callbacks.updateToken = (state, action) => {
  state.token = action.payload.token;
};

callbacks.login = (state, action) => {
  state.isLoggedIn = true;
  state.token = action.payload.token;
  state.tokenType = action.payload.tokenType;
  state.isAdmin = action.payload.isAdmin;
  state.user = action.payload.user;
};

callbacks.logout = () => {
  return _.cloneDeep(initialState);
};

callbacks.updateUser = (state, action) => {
  state.user = action.payload.user;
};

const slice = createSlice({
  name: 'session',
  initialState: _.cloneDeep(initialState),
  reducers: callbacks,
});

const {actions, reducer} = slice;

export const {updateToken, login, logout, updateUser} = actions;

export default reducer;
