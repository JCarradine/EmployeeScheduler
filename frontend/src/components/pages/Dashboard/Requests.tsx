import { Pencil } from "lucide-react";
import { EXAMPLE_WORKERS, type WorkerRequests } from "./Types";
import "../../Card.scss";

const WORKER_REQUESTS: WorkerRequests[] =
	EXAMPLE_WORKERS.find((Worker) => Worker.id === 1)?.requests ?? [];

function Requests() {
	return (
		<div className="card">
			{/*Avaiability Card Header*/}
			<div className="card-header">
				<div className="card-title">Requests</div>
				<button className="card-button">
					<div className="card-button-label">Edit</div>
					<Pencil className="card-button-icon" />
				</button>
			</div>

			{/*Avaiability Card List*/}
			<div className="card-main">
				<ul className="list">
					{WORKER_REQUESTS.length > 0 &&
						WORKER_REQUESTS.map((r) => (
							<li className="list-item" key={r.id}>
								<div>{r.reason}</div>

								<div>
									<div>
										{r.startDate.getMonth() + 1}/{r.startDate.getDate() + 1}/
										{r.startDate.getFullYear()}
										{r.endDate && (
											<>
												{" - "}
												{r.endDate.getMonth() + 1}/{r.endDate.getDate() + 1}/
												{r.endDate.getFullYear()}
											</>
										)}
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export default Requests;
