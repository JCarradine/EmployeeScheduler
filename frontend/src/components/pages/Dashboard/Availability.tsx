import "../../Card.scss";

function Availability() {
	return (
		<div className="card">
			{/*Avaiability Card Header*/}
			<div className="card-header">
				<div className="card-title">Availability</div>
				<button className="card-button">&#9998;</button>
			</div>

			{/*Avaiability Card List*/}
			<div className="card-main">
				<ul className="list">
					<li className="list-item">
						<div>Monday</div>
						<div>8am-8pm</div>
					</li>
					<li className="list-item">
						<div>Monday</div>
						<div>8am-8pm</div>
					</li>
					<li className="list-item">
						<div>Monday</div>
						<div>8am-8pm</div>
					</li>
					<li className="list-item">
						<div>Monday</div>
						<div>8am-8pm</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Availability;
