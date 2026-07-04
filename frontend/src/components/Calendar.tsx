import "./Calendar.scss";
import { getCurrentMonthDetails } from "./CalendarDate.ts";

function Calendar() {
  const Weekdays: readonly string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const MonthDetails = getCurrentMonthDetails();

  return (
    <div className="calendar-container">
      <div>
        {/*month header*/}
        <div className="month-display">
          <div className="month">{MonthDetails.monthName}</div>
          <div className="nav">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>

        {/*day header*/}
        <div className="day-display">
          {Weekdays.map((day) => (
            <div className="day" key={day}>
              {day}
            </div>
          ))}
        </div>

        {/*week display*/}
        <div className="week-display">
          {Array.from({ length: MonthDetails.totalDays }, (_, i) => (
            <div className="date" key={i + 1}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
