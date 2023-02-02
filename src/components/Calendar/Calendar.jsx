import { useDispatch, useSelector } from "react-redux";
import CalendarJs from "../../calendar";
import {
  setDaySelected,
  setMonthSelected,
  setYearSelected,
} from "../../redux/calendarSlice";
import s from "./Calendar.module.css";
import Years from "./Years/Years";

export default function Calendar() {
  const yearSelected = useSelector((state) => state.calendar.yearSelected);
  const monthSelected = useSelector((state) => state.calendar.monthSelected);
  const daySelected = useSelector((state) => state.calendar.daySelected);

  const dispatch = useDispatch();

  const years = CalendarJs().years(2015, 2023);
  const months = CalendarJs().months();

  const getDayClasses = (day) => {
    return `${s.item} ${day === daySelected ? s.active : null}`;
  };
  const getMonthClasses = (month) => {
    return `${s.button} ${month === monthSelected ? s.active : null}`;
  };

  const selectYear = (year) => {
    dispatch(setYearSelected(year));
    dispatch(setDaySelected(null));
  };

  const showCalendar = () => {
    if (yearSelected && monthSelected) {
      const month = months.indexOf(monthSelected);
      const calendar = CalendarJs().of(Number(yearSelected), month);

      return (
        <>
          <ul className={s.calendar}>
            {calendar.weekdaysAbbr.map((weekday) => (
              <li className={s.item} key={weekday}>
                <span className="day">{weekday}</span>
              </li>
            ))}
            {calendar.calendar.map((week) =>
              week.map((day) => (
                <li
                  className={getDayClasses(day)}
                  key={Math.random()}
                  onClick={() => {
                    dispatch(setDaySelected(day));
                  }}
                >
                  <span>{day !== 0 ? day : ""}</span>
                </li>
              ))
            )}
          </ul>
        </>
      );
    }
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Calendar</h1>

      <Years
        years={years}
        yearSelected={yearSelected}
        selectYear={(year) => selectYear(year)}
      />

      <ul className={s.monthsList}>
        {months.map((month) => (
          <li key={month}>
            <button
              onClick={() => {
                dispatch(setMonthSelected(month));
                dispatch(setDaySelected(null));
              }}
              className={getMonthClasses(month)}
            >
              {month}
            </button>
          </li>
        ))}
      </ul>

      {yearSelected && <p>Selected year: {yearSelected}</p>}
      {monthSelected && <p>Selected month: {monthSelected}</p>}
      {showCalendar()}
      {daySelected && (
        <p>
          Show tasks for {daySelected} {monthSelected} {yearSelected}
        </p>
      )}
    </div>
  );
}
