import "./Dashboard.scss";
import Schedule from "../Schedule.tsx";
import Requests from "../Requests.tsx";
("./Requests.tsx");
import Availability from "../Availability.tsx";

function Dashboard() {
	return (
		<div className="dashboard-container">
			{/*welcome header*/}
			<header className="welcome-card">Hello JohnFirst DoeLast!</header>

			{/*schedule*/}
			<main className="sched-container">
				<Schedule />
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
