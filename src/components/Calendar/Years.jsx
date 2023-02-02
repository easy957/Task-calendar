import s from "./CalendarPage.module.css";

export default function Years({ years, yearSelected, selectYear }) {
  const getYearClasses = (year) => {
    return `${s.button} ${year === yearSelected ? s.active : null}`;
  };

  return (
    <ul className={s.yearsList}>
      {years.map((year) => (
        <li key={year}>
          <button
            onClick={() => selectYear(year)}
            className={getYearClasses(year)}
          >
            {year}
          </button>
        </li>
      ))}
    </ul>
  );
}
