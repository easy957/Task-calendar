import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  todayTask: null,
};

export const calendarSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = calendarSlice.actions;

export default calendarSlice.reducer;
