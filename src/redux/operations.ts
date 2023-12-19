import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

interface Todo {
  userId: number;
  todo: string;
  completed: boolean;
}

interface UpdateData {
  todoId: number;
  data: {
    completed: boolean;
  };
}

interface UpdateTodo {
  todoId: number | null;
  data: { todo: string };
}

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (skip: number, thunkAPI) => {
    try {
      const response = await axios.get(`/todos?limit=10&skip=${skip}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo: Todo, thunkAPI) => {
    try {
      const response = await axios.post("/todos/add", newTodo);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId: number, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      return response.data.id;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCompleted = createAsyncThunk(
  "todos/updateCompleted",
  async ({ todoId, data }: UpdateData, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todoId}`, data);
      return response.data.id;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ todoId, data }: UpdateTodo, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todoId}`, data);

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
