import React from "react";

function Slideshow() {
	return (
		<section className="slide-container">
			<div className="slide">
				<img
					src={require("../media/desktop-screenshots/comment-section.png")}
					alt="Interactive Comment Section Screenshot"
				/>
			</div>
			<div className="slide">
				<img
					src={require("../media/desktop-screenshots/github-jobs.png")}
					alt="Github Jobs Screenshot"
				/>
			</div>
			<div className="slide">
				<img
					src={require("../media/desktop-screenshots/weather-app.png")}
					alt="Weather App Screenshot"
				/>
			</div>
			<div className="slide">
				<img
					src={require("../media/desktop-screenshots/comment-section.png")}
					alt="Interactive Comment Section Screenshot"
				/>
			</div>
			<div className="slide">
				<img
					src={require("../media/desktop-screenshots/github-jobs.png")}
					alt="Github Jobs Screenshot"
				/>
			</div>
		</section>
	);
}

export default Slideshow;
