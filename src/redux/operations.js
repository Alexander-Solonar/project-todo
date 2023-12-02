import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (skip, thunkAPI) => {
    try {
      const response = await axios.get(`/todos?limit=10&skip=${skip}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, thunkAPI) => {
    try {
      const response = await axios.post("/todos/add", newTodo);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCompleted = createAsyncThunk(
  "todos/updateCompleted",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${id}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${id}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
