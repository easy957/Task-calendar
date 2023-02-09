import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../api/api";

const initialState = {
  taskList: [],
  todayTask: null,
  isLoading: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTasksThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setTasksThunk.fulfilled, (state, action) => {
        state.taskList = [...action.payload];
        state.isLoading = false;
      });
  },
});

export const setTasksThunk = createAsyncThunk("tasks/set-tasks", async () => {
  const tasks = await fetchTasks();
  return tasks;
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
