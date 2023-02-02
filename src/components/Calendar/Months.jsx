import s from "./CalendarPage.module.css";

export default function Months({ months, monthSelected, selectMonth }) {
  const getMonthClasses = (month) => {
    return `${s.button} ${month === monthSelected ? s.active : null}`;
  };

  return (
    <ul className={s.monthsList}>
      {months.map((month) => (
        <li key={month}>
          <button
            onClick={() => {
              selectMonth(month);
            }}
            className={getMonthClasses(month)}
          >
            {month}
          </button>
        </li>
      ))}
    </ul>
  );
}
