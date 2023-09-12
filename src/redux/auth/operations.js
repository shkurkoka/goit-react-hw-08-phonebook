import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Для ЮЗЕРІВ

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", formData);
      setAuthHeader(response.data.token);
      // console.log("data", response.data);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", formData);
      setAuthHeader(response.data.token);
      // console.log("data", response.data);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (thunkAPI) => {
    try {
      await axios.post(`/users/logout`);
      clearAuthHeader();
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      // console.log("data", response.data);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);