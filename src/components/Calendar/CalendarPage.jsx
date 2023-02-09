import { useDispatch, useSelector } from "react-redux";
import CalendarJs from "../../calendar";
import {
  setDaySelected,
  setMonthSelected,
  setYearSelected,
} from "../../redux/calendarSlice";
import s from "./CalendarPage.module.css";
import Calendar from "./Calendar";
import Months from "./Months";
import Years from "./Years";
import { setTasksThunk } from "../../redux/tasksSlice";
import Tasks from "./Tasks";

export default function CalendarPage() {
  const yearSelected = useSelector((state) => state.calendar.yearSelected);
  const monthSelected = useSelector((state) => state.calendar.monthSelected);
  const daySelected = useSelector((state) => state.calendar.daySelected);
  const tasks = useSelector((state) => state.tasks.taskList);
  const tasksLoading = useSelector((state) => state.tasks.isLoading);

  const dispatch = useDispatch();

  const years = CalendarJs().years(2015, 2023);
  const months = CalendarJs().months();

  const getCalendar = () => {
    const monthIndex = months.indexOf(monthSelected);
    const calendar = CalendarJs().of(Number(yearSelected), monthIndex);
    return calendar;
  };

  const selectYear = (year) => {
    dispatch(setYearSelected(year));
    dispatch(setDaySelected(null));
  };

  const selectMonth = (month) => {
    dispatch(setMonthSelected(month));
    dispatch(setDaySelected(null));
    dispatch(setTasksThunk());
  };

  const selectDay = (day) => {
    dispatch(setDaySelected(day));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Calendar</h1>

      <Years
        years={years}
        yearSelected={yearSelected}
        selectYear={(year) => selectYear(year)}
      />

      <Months
        months={months}
        monthSelected={monthSelected}
        selectMonth={(month) => selectMonth(month)}
      />

      {yearSelected && <p>Selected year: {yearSelected}</p>}
      {monthSelected && <p>Selected month: {monthSelected}</p>}
      {yearSelected && monthSelected && (
        <Calendar
          calendar={getCalendar()}
          daySelected={daySelected}
          selectDay={(day) => selectDay(day)}
        />
      )}

      {daySelected && (
        <p>
          Show tasks for {daySelected} {monthSelected} {yearSelected}
          <Tasks tasks={tasks} isLoading={tasksLoading} />
        </p>
      )}
    </div>
  );
}
