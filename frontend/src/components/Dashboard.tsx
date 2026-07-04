import "./Dashboard.scss";
import Schedule from "./Schedule.tsx";
import Requests from "./Requests.tsx";
("./Requests.tsx");
import Availability from "./Availability.tsx";
import Calendar from "./Calendar.tsx";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/*welcome header*/}
      <header className="welcome-card">Hello JohnFirst DoeLast!</header>

      {/*calendar or schedule*/}
      <main className="cal-sched-container">
        <Calendar />
      </main>

      {/*availability and requests aside*/}
      <aside className="side-container">
        <Availability />
        <Requests />
      </aside>
    </div>
  );
}

export default Dashboard;
