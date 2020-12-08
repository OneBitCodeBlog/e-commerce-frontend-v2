import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SystemRequirement from '../../../../dtos/SystemRequirement';

const systemRequirementReducer = createSlice({
  name: 'systemRequirement',
  initialState: null,
  reducers: {
    setSystemRequirementToEdit(
      state: SystemRequirement, 
      action: PayloadAction<SystemRequirement>
    ) {
      return state = action.payload;
    },
    clearSystemRequirementToEdit(state: SystemRequirement) {
      return state = null;
    }
  }
});

export const { 
  setSystemRequirementToEdit, 
  clearSystemRequirementToEdit
} = systemRequirementReducer.actions;

export default systemRequirementReducer.reducer;