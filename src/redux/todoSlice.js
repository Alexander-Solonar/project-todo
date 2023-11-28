import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilledFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex((todo) => todo.id === action.payload.id);
  state.items.splice(index, 1);
};

const todosSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, handleFulfilledFetch)
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.pending, handlePending)
      .addCase(addTodo.fulfilled, handleFulfilledAdd)
      .addCase(addTodo.rejected, handleRejected)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(deleteTodo.fulfilled, handleFulfilledDelete)
      .addCase(deleteTodo.rejected, handleRejected);
  },
});

export const todosReduser = todosSlice.reducer;
