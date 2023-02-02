import { Provider } from "react-redux";
import "./App.css";
import CalendarPage from "./components/Calendar/CalendarPage";
import { store } from "./redux/redux";

function App() {
  // calendar.calendar = calendar.calendar.map((week) => {
  //   const newWeek = week.slice(1);
  //   newWeek.push(week[0]);
  //   return newWeek;
  // });

  return (
    <div className="App">
      <Provider store={store}>
        <CalendarPage />
      </Provider>
      {/* <div className="container">
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
      </div> */}
    </div>
  );
}

export default App;
