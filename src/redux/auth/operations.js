import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Для ЮЗЕРІВ
axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com";

export const register = createAsyncThunk(
  "contacts/addContact",
  async ({name, email, password}, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", {name, email, password});
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const login = createAsyncThunk(
  "contacts/addContact",
  async ({email, password}, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", {email, password});
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const logout = createAsyncThunk(
  "contacts/deleteContact",
  async (token, thunkAPI) => {
    try {
      const response = await axios.delete(`/users/logout${token}`);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});