import "./Dashboard.scss";
import Banner from "./Banner.tsx";
import Schedule from "./Schedule.tsx";
import Requests from "./Requests.tsx";
import Availability from "./Availability.tsx";

function Dashboard() {
	return (
		<div className="dashboard-container">
			{/*welcome header*/}
			<header className="banner-container">
				<Banner />
			</header>

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
