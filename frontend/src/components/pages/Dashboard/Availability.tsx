import { Pencil } from "lucide-react";
import { EXAMPLE_WORKERS, type WorkerAvailability } from "./Types";
import "../../Card.scss";

const WORKER_AVAILABILITY: WorkerAvailability[] =
	EXAMPLE_WORKERS.find((worker) => worker.id === 1)?.availability ?? [];

function Availability() {
	return (
		<div className="card">
			{/*Avaiability Card Header*/}
			<div className="card-header">
				<div className="card-title">Availability</div>
				<button className="card-button">
					<div className="card-button-label">Edit</div>
					<Pencil className="card-button-icon" />
				</button>
			</div>

			{/*Avaiability Card List*/}
			<div className="card-main">
				<ul className="list">
					{WORKER_AVAILABILITY.map((a) => (
						<li className="list-item" key={a.day}>
							<div>{a.day}</div>
							{a.isAvailable ? (
								<div>
									{a.startHour}:{a.startMinute} {a.startPeriod} - {a.endHour}:
									{a.endMinute} {a.endPeriod}
								</div>
							) : (
								<div>UNAVAILABLE</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Availability;
