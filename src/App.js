import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CalendarPage from "./components/Calendar/CalendarPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import TestPage from "./components/TestPage/TestPage";

function App() {
  // calendar.calendar = calendar.calendar.map((week) => {
  //   const newWeek = week.slice(1);
  //   newWeek.push(week[0]);
  //   return newWeek;
  // });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="calendar" />} />

        <Route path="calendar" element={<CalendarPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="login" element={<Login />} />
      </Routes>

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
