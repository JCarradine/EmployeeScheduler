import "../../util/Card.scss";

function Requests() {
	return (
		<div className="card">
			{/*Avaiability Card Header*/}
			<div className="card-header">
				<div className="card-title">Requests</div>
				<button className="card-button">+</button>
			</div>

			{/*Avaiability Card List*/}
			<div className="card-main">
				<ul className="list">
					<li className="list-item">
						<div>Monday</div>
						<div>01/11/2011</div>
					</li>
					<li className="list-item">
						<div>Monday</div>
						<div>01/11/2011</div>
					</li>
					<li className="list-item">
						<div>Monday</div>
						<div>01/11/2011</div>
					</li>
					<li className="list-item">
						<div>Monday</div>
						<div>01/11/2011</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Requests;
