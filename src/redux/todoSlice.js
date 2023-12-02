import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateCompleted,
  updateTodo,
} from "./operations";

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
  state.items.todos.unshift(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.todos.findIndex(
    (todo) => todo.id === action.payload.id
  );
  state.items.todos.splice(index, 1);
};

const handleFulfilledUpdateCompleted = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.todos.findIndex(
    (todo) => todo.id === action.payload.id
  );
  state.items.todos[index].completed = action.payload.completed;
};

const handleFulfilledUpdateTodo = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.todos.findIndex(
    (todo) => todo.id === action.payload.id
  );

  state.items.todos[index].todo = action.payload.todo;
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
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(updateCompleted.pending, handlePending)
      .addCase(updateCompleted.fulfilled, handleFulfilledUpdateCompleted)
      .addCase(updateCompleted.rejected, handleRejected)
      .addCase(updateTodo.pending, handlePending)
      .addCase(updateTodo.fulfilled, handleFulfilledUpdateTodo)
      .addCase(updateTodo.rejected, handleRejected);
  },
});

export const todosReducer = todosSlice.reducer;
