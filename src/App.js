import "./App.css";
import CalendarJs from "./calendar/calendar";

function App() {
  const calendar = CalendarJs().of(2023, 0);
  console.log(calendar);

  // calendar.calendar = calendar.calendar.map((week) => {
  //   const newWeek = week.slice(1);
  //   newWeek.push(week[0]);
  //   return newWeek;
  // });

  return (
    <div className="App">
      <div className="container">
        <div>
          {calendar.weekdaysAbbr.map((weekday) => (
            <span className="day">{weekday}</span>
          ))}
        </div>
        {calendar.calendar.map((week) => (
          <div>
            {week.map((day) => (
              <span
                className="day"
                onClick={() => {
                  console.log(day);
                }}
              >
                {day}
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
