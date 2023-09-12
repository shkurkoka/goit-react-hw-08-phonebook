import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser, refreshUser } from "./operations";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.authentecated = false;
    state.error = action.payload;
};

const initialState = {
    userData: { name: null, email: null },
    token: null,
    authentecated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [registerUser.pending]: handlePending,
        [registerUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.authentecated = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        },
        [registerUser.rejected]: handleRejected,

        [loginUser.pending]: handlePending,
        [loginUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.authentecated = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        },
        [loginUser.rejected]: handleRejected,

        [logOutUser.pending]: handlePending,
        [logOutUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.authentecated = false;
            state.userData = null;
            state.token = null;
        },
        [logOutUser.rejected]: handleRejected,

        [refreshUser.pending]: handlePending,
        [refreshUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.authentecated = true;
            state.userData = action.payload;
        },
        [refreshUser.rejected]: handleRejected,
    },
});

export const getUserData = (state) => state.auth.userData;
export const getUserToken = (state) => state.auth.token;
export const getUserAuthentecation = (state) => state.auth.authentecated;
export const getUserIsLoading = (state) => state.auth.isLoading;
export const getUserError = (state) => state.auth.error;


export const authReducer = authSlice.reducer;