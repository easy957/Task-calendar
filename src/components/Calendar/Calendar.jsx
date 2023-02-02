import s from "./CalendarPage.module.css";

export default function Calendar({ calendar, daySelected, selectDay }) {
  const getDayClasses = (day) => {
    return `${s.item} ${day === daySelected ? s.active : null}`;
  };

  return (
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
              selectDay(day);
            }}
          >
            <span>{day !== 0 ? day : ""}</span>
          </li>
        ))
      )}
    </ul>
  );
}
