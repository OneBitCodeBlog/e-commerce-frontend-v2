import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pagination {
  currentPage: number;
}

const paginationReducer = createSlice({
  name: 'pagination',
  initialState: { currentPage: 0 } as Pagination,
  reducers: {
    setCurrentPage(state: Pagination, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  }
})

export const { setCurrentPage } = paginationReducer.actions;
export default paginationReducer.reducer;