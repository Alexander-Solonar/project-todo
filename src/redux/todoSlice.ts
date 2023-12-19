import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateCompleted,
  updateTodo,
} from "./operations";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  isLoading: boolean;
  total: number;
  error: null | Error;
}

const initialState: State = {
  todos: [],
  total: 0,
  isLoading: false,
  error: null,
};

const handlePending = (state: State) => {
  state.isLoading = true;
};

const handleRejected: CaseReducer = (state: State, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledFetch = (
  state: State,
  action: PayloadAction<{ todos: Todo[]; total: number }>
) => {
  state.isLoading = false;
  state.error = null;
  state.todos = action.payload.todos;
  state.total = action.payload.total;
};

const handleFulfilledAdd = (state: State, action: PayloadAction<Todo>) => {
  state.isLoading = false;
  state.error = null;
  state.todos.unshift(action.payload);
};

const handleFulfilledDelete = (state: State, action: PayloadAction<number>) => {
  state.isLoading = false;
  state.error = null;
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
};

const handleFulfilledUpdateCompleted = (
  state: State,
  action: PayloadAction<number>
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.todos.findIndex((todo) => todo.id === action.payload);
  state.todos[index].completed = !state.todos[index].completed;
};

const handleFulfilledUpdateTodo = (
  state: State,
  action: PayloadAction<Todo>
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
  state.todos[index].todo = action.payload.todo;
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
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
