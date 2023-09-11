import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Для ЮЗЕРІВ

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const token = {
  set: (token) => {
    instance.defaults.headers["Authorization"] = token;
  },
  clear: () => {
    instance.defaults.headers["Authorization"] = '';
  }
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post("/users/signup", formData);
      token.set(response.data.token);
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
      const response = await instance.post("/users/login", formData);
      token.set(response.data.token);
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
      await instance.post(`/users/logout`);
      token.clear();
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const refreshToken = state.auth.token;

      // if (!refreshToken) {
      //   return thunkAPI.rejectWithValue("Please, user register first");
      // }

      token.set(refreshToken);

      const response = await instance.get("/users/current");
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }, 
  {
    condition: (_, { getState }) => {
      const state = getState();
      const token = state.auth.token;
      if (!token) return false; 
    }
  }
);