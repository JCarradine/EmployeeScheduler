import { LogOut } from "lucide-react";
import "./Banner.scss";

function Banner() {
	return (
		<div className="banner-card">
			<div className="banner-title">Hello John Doe!</div>
			<button className="banner-button">
				<LogOut />
			</button>
		</div>
	);
}

export default Banner;
