import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Product from '../../../../dtos/Product';

const productReducer = createSlice({
  name: 'product',
  initialState: null,
  reducers: {
    setProductToEdit(state: Product, action: PayloadAction<Product>) {
      return state = action.payload;
    },
    clearProductToEdit(state) {
      return state = null;
    }
  }
})

const { setProductToEdit, clearProductToEdit } = productReducer.actions;
export default productReducer.reducer;