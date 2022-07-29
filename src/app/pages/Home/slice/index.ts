import { HomeState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Pageable, ProductI } from 'types';

export const initialState: HomeState = {};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getProducts() {},
    getProductssSuccess(state, action: PayloadAction<Pageable<ProductI>>) {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: homeManagementAction } = homeSlice;

export default homeSlice.reducer;
