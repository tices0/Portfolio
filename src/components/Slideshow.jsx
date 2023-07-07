import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import githubJobsDestop from "../media/desktop-screenshots/github-jobs.png";
import weatherAppDestop from "../media/desktop-screenshots/weather-app.png";
import commentSectionDestop from "../media/desktop-screenshots/comment-section.png";
import { projectLinks } from "../pages/Projects";

// const spanStyle = {
// 	padding: "20px",
// 	background: "#efefef",
// 	color: "#000000",
// };

const divStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	height: "calc(100vh - 10rem)",
	width: "calc(100vw - 10rem)",
	zIndex: "999",
};

const slideImages = [
	{
		url: githubJobsDestop,
		caption: "Github Jobs",
	},
	{
		url: weatherAppDestop,
		caption: "Weather App",
	},
	{
		url: commentSectionDestop,
		caption: "Interactive Comment Section",
	},
];

const Slideshow = ({ setPage }) => {
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
							onClick={() => {
								window.open(
									`${projectLinks[index].live}`,
									"_blank",
								);
								console.log("clicked");
							}}
						>
							{/* <span style={spanStyle}>{slideImage.caption}</span> */}
						</div>
					</li>
				))}
			</Slide>
		</ul>
	);
};

export default Slideshow;
