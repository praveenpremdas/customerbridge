import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProfileState {
  isProfileEditDisabled: boolean;
  customerData: any;
}


const initialState: ProfileState = {
  isProfileEditDisabled: false,
  customerData: {},
};


const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleEditState(state) {
      state.isProfileEditDisabled = !state.isProfileEditDisabled;
    },
    toggleEditTrue(state) {
      state.isProfileEditDisabled = true;
    },
    toggleEditFalse(state) {
      state.isProfileEditDisabled = false;
    },
    updateCustomer(state) {
      state.isProfileEditDisabled = !state.isProfileEditDisabled;
    },
    setEditState(state, action: PayloadAction<boolean>) {
      state.isProfileEditDisabled = action.payload;
    },
  },
});


export const { toggleEditState, setEditState, toggleEditTrue, toggleEditFalse } = profileSlice.actions;


export default profileSlice.reducer;



