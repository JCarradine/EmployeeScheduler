import "./Schedule.scss";
import React from "react";

function Schedule() {
	const DayNames: readonly string[] = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];

	const Managers: string[] = ["John", "Jane"];
	const Hours: string[] = ["8-4", "8-4", "8-4", "8-4", "8-4", "8-4", "8-4"];

	return (
		<div className="schedule-card">
			{/*Schedule Card Header*/}
			<div className="sched-column-header">Names</div>
			{DayNames.map((day) => (
				<React.Fragment key={day}>
					<div className="work-date">
						<div>{day}</div>
						<div>7/1/26</div>
					</div>
				</React.Fragment>
			))}
			<div className="sched-column-header">Total Hours</div>

			{/*Managers*/}

			{/*Decorators*/}
			<button className="section-header">
				<div>Managers</div>
				<div>&#x25BC;</div>
			</button>
			<div className="section-content">
				{Managers.map((manager) => (
					<div className="section-item" key={manager}>
						<div className="item-name">{manager}</div>

						{Hours.map((hour) => (
							<div className="item-shift" key={hour}>
								<div>{hour}</div>
								<div>8.0</div>
							</div>
						))}

						<div className="item-hour">40.0</div>
					</div>
				))}
			</div>

			{/*Shift Leads*/}

			{/*Sales Associates*/}
		</div>
	);
}

export default Schedule;
