import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yearSelected: null,
  monthSelected: null,
  daySelected: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setYearSelected: (state, action) => {
      state.yearSelected = action.payload;
    },
    setMonthSelected: (state, action) => {
      state.monthSelected = action.payload;
    },
    setDaySelected: (state, action) => {
      state.daySelected = action.payload;
    },
  },
});

export const { setYearSelected, setMonthSelected, setDaySelected } =
  calendarSlice.actions;

export default calendarSlice.reducer;
