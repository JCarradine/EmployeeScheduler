import { useState } from "react";
import "./Schedule.scss";
import type { Workers } from "./ScheduleTypes.ts";

const DAY_NAMES: readonly string[] = [
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun",
	"Mon",
	"Tue",
];

const EXAMPLE_WORKERS: Workers[] = [
	{
		id: 1,
		name: "John",
		shifts: ["8-4", "8-4", "8-4", "8-4", "8-4", "OFF", "OFF"],
		totalHours: 40,
		role: "Manager",
	},
	{
		id: 2,
		name: "Jane",
		shifts: ["8-4", "8-4", "8-4", "8-4", "8-4", "8-4", "8-4"],
		totalHours: 56,
		role: "Manager",
	},
	{
		id: 3,
		name: "Alice",
		shifts: ["OFF", "12-8", "12-8", "12-8", "OFF", "8-4", "8-4"],
		totalHours: 40,
		role: "Decorator",
	},
	{
		id: 4,
		name: "Bob",
		shifts: ["8-4", "8-4", "OFF", "OFF", "8-4", "8-4", "8-4"],
		totalHours: 40,
		role: "SalesAssociate",
	},
];

const MANAGERS: Workers[] = EXAMPLE_WORKERS.filter(
	(worker) => worker.role === "Manager",
);
const DECORATORS: Workers[] = EXAMPLE_WORKERS.filter(
	(worker) => worker.role === "Decorator",
);
const SHIFT_LEADS: Workers[] = EXAMPLE_WORKERS.filter(
	(worker) => worker.role === "ShiftLead",
);
const SALES_ASSOCIATES: Workers[] = EXAMPLE_WORKERS.filter(
	(worker) => worker.role === "SalesAssociate",
);

function Schedule() {
	const [isManagerExpanded, setIsManagerExpanded] = useState(true);
	const [isDecoratorExpanded, setIsDecoratorExpanded] = useState(true);
	const [isShiftLeadExpanded, setIsShiftLeadExpanded] = useState(true);
	const [isSalesAssociateExpanded, setIsSalesAssociateExpanded] =
		useState(true);

	return (
		<div className="schedule-card">
			{/*Schedule Card Header*/}
			<div className="sched-column-header">Names</div>
			{DAY_NAMES.map((day) => (
				<div className="sched-column-date" key={day}>
					<div>{day}</div>
					<div>7/1/26</div>
				</div>
			))}
			<div className="sched-column-header">Total Hours</div>

			{/*Managers*/}
			<button
				className="section-header"
				onClick={() => setIsManagerExpanded(!isManagerExpanded)}
			>
				<div>Managers</div>
				<div>&#x25BC;</div>
			</button>
			{isManagerExpanded &&
				MANAGERS.map((manager) => (
					<div className="worker" key={manager.id}>
						<div className="worker-name">{manager.name}</div>

						{manager.shifts.map((shift) => (
							<div className="worker-shift" key={shift}>
								<div>{shift}</div>
								<div>8.0</div>
							</div>
						))}

						<div className="worker-hours">{manager.totalHours}</div>
					</div>
				))}

			{/*Decorators*/}
			<button
				className="section-header"
				onClick={() => setIsDecoratorExpanded(!isDecoratorExpanded)}
			>
				<div>Decorators</div>
				<div>&#x25BC;</div>
			</button>
			{isDecoratorExpanded &&
				DECORATORS.map((decorator) => (
					<div className="worker" key={decorator.id}>
						<div className="worker-name">{decorator.name}</div>

						{decorator.shifts.map((shift) => (
							<div className="worker-shift" key={shift}>
								<div>{shift}</div>
								<div>8.0</div>
							</div>
						))}

						<div className="worker-hours">{decorator.totalHours}</div>
					</div>
				))}

			{/*Shift Leads*/}
			<button
				className="section-header"
				onClick={() => setIsShiftLeadExpanded(!isShiftLeadExpanded)}
			>
				<div>ShiftLeads</div>
				<div>&#x25BC;</div>
			</button>
			{isShiftLeadExpanded &&
				SHIFT_LEADS.map((shiftLead) => (
					<div className="worker" key={shiftLead.id}>
						<div className="worker-name">{shiftLead.name}</div>

						{shiftLead.shifts.map((shift) => (
							<div className="worker-shift" key={shift}>
								<div>{shift}</div>
								<div>8.0</div>
							</div>
						))}

						<div className="worker-hours">{shiftLead.totalHours}</div>
					</div>
				))}

			{/*Sales Associates*/}
			<button
				className="section-header"
				onClick={() => setIsSalesAssociateExpanded(!isSalesAssociateExpanded)}
			>
				<div>SalesAssociates</div>
				<div>&#x25BC;</div>
			</button>
			{isSalesAssociateExpanded &&
				SALES_ASSOCIATES.map((salesAssociate) => (
					<div className="worker" key={salesAssociate.id}>
						<div className="worker-name">{salesAssociate.name}</div>

						{salesAssociate.shifts.map((shift) => (
							<div className="worker-shift" key={shift}>
								<div>{shift}</div>
								<div>8.0</div>
							</div>
						))}

						<div className="worker-hours">{salesAssociate.totalHours}</div>
					</div>
				))}
		</div>
	);
}

export default Schedule;
