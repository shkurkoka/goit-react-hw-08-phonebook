import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Для КОНТАКТІВ
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // console.log("data", response.data);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", formData);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
});