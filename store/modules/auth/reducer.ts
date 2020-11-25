import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../../dtos/User';
import AuthState from '../../../dtos/AuthState';

const authSlice = createSlice({
    name: '',
    initialState: { auth: { loggedUser: null } } as AuthState,
    reducers: {
        setLoggedUser(state, action: PayloadAction<User>) {
            state.auth.loggedUser = action.payload; 
        },
        clearLoggedUser(state) {
            state.auth.loggedUser = null;
        },
    }
})

export const { setLoggedUser, clearLoggedUser } = authSlice.actions;
export default authSlice.reducer;