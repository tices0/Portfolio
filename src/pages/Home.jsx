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

			<section className="info">
				<ul className="left">
					<li>
						<h1>React JS</h1>
						<p>
							<b>This website</b> was made using React JS.
						</p>
					</li>
					<li>
						<h1>SCSS</h1>
						<p>
							<b>This website</b> was made solely using SCSS for
							styling.
						</p>
					</li>
					<li>
						<h1>Python Django</h1>
						<p>
							Learnt through{" "}
							<b>
								Harvard's CS50 Introduction to Web Programming
								with Python and JavaScript
							</b>
						</p>
					</li>
				</ul>
				<ul className="right">
					<li className="first">
						<i className="fa-solid fa-paintbrush"></i>
						<h1>Figma</h1>
						<p>Exact copy of design</p>
					</li>
					<li className="second">
						<i className="fa-solid fa-plus"></i>
						<h1>Bootstrap</h1>
						<p>Easy intergration</p>
					</li>
					<li className="third">
						<i class="fa-solid fa-clock"></i>
						<h1>Tailwind</h1>
						<p>Quick completion</p>
					</li>
				</ul>
			</section>
		</main>
	);
}

export default Home;
