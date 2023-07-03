import React from "react";
import { describeArc } from "..";
import { ReactComponent as GradientSvg } from "../components/svgGradient.svg";
import { Svg1, Svg2 } from "../components/Svgs";

function Home() {
	return (
		<main className="pages" id="home-page">
			<GradientSvg />
			<i className="fa-solid fa-circle"></i>
			<div className="first-outline">
				<Svg1 d={describeArc(0.5, 0.5, 0.48, -30, 30)} />
				<Svg2 d={describeArc(0.5, 0.5, 0.48, 180 - 15, 180 + 15)} />
			</div>
			<div className="second-outline"></div>
			<div className="scroll-down">
				<div className="text">
					<h1>scroll down</h1>
					<p>to see more info about my projects</p>
				</div>
				<i className="fa-solid fa-arrow-pointer"></i>
			</div>
		</main>
	);
}

export default Home;
