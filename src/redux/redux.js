import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendarSlice";
import tasksSlice from "./tasksSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    tasks: tasksSlice,
  },
});

window.store = store;
