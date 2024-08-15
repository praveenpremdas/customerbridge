import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CustomerCommon {
  pagenationPageSize: any;
}

const initialState: CustomerCommon = {
  pagenationPageSize: 0
};


const customerCommonSlice = createSlice({
  name: 'customerCommon',
  initialState,
  reducers: {
    updatePagenationPageSize(state, action) {
      state.pagenationPageSize = action.payload;
    }
  },
});


export const { updatePagenationPageSize } = customerCommonSlice.actions;


export default customerCommonSlice.reducer;