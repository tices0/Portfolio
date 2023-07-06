import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
	padding: "20px",
	background: "#efefef",
	color: "#000000",
};

const divStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundSize: "cover",
	height: "400px",
};
const slideImages = [
	{
		url: "../media/desktop-screenshots/github-jobs.png",
		caption: "Github Jobs",
	},
	{
		url: "../media/desktop-screenshots/weather-app.png",
		caption: "Weather App",
	},
	{
		url: "../media/desktop-screenshots/comment-section.png",
		caption: "Interactive Comment Section",
	},
];

const Slideshow = () => {
	return (
		<ul className="slide-container">
			<Slide>
				{slideImages.map((slideImage, index) => (
					<li key={index}>
						<div
							className="slide"
							style={{
								...divStyle,
								backgroundImage: `url(${slideImage.url})`,
							}}
                            id={`slide${index}`}
						>
							<span style={spanStyle}>{slideImage.caption}</span>
						</div>
					</li>
				))}
			</Slide>
		</ul>
	);
};

export default Slideshow;
