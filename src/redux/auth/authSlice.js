import authOperation from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  redusers: {},
  extraReducers: builder => {
    builder
      .addCase(authOperation.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.register.rejected, (state, action) => {
        state.user = { name: null, email: null };
        state.error = action.payload;
      })
      .addCase(authOperation.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logIn.rejected, (state, action) => {
        state.user = { name: null, email: null };
        state.error = action.payload;
      })
      .addCase(authOperation.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperation.fetchRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export default authSlice.reducer;

// Selectors
export const selectUserName = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectFetchingRefreshUser = state =>
  state.auth.isFetchingRefreshUser;
