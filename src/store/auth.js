import { createSlice } from "@reduxjs/toolkit";


//Auth Slice

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;