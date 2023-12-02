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

// Adding a new todo will not add it into the server.
//  It will simulate a POST request and will return the new created todo with a new id
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

// Deleting a todo will not delete it into the server.
// It will simulate a DELETE request and will return deleted todo with "isDeleted" & "deletedOn" keys
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

// Updating a todo will not update it into the server.
//  It will simulate a PUT/PATCH request and will return the todo with modified data
export const updateCompleted = createAsyncThunk(
  "todos/updateCompleted",
  async ({ todoId, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todoId}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Updating a todo will not update it into the server.
//  It will simulate a PUT/PATCH request and will return the todo with modified data
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ todoId, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todoId}`, data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
