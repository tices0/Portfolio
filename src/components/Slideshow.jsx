import React, { useState, useRef, useEffect } from "react";
import { projectLinks } from "..";

function Slideshow() {
	const slidesRef = useRef([]);
	const slideContainer = useRef();

	const [counter, setCounter] = useState(1);
	const [size, setSize] = useState(0);

	useEffect(() => {
		console.log("========== initial use effect");
		setSize(slidesRef.current[0].clientWidth);
		console.log("size before initial transform:", size);
		slideContainer.current.style.transform =
			"translateX(" + -size * counter + "px)";
		// eslint-disable-next-line
	}, [size]);

	const transitionEnd = () => {
		if (slidesRef.current[counter].id === "lastClone") {
			slideContainer.style.transition = "none";
			setCounter(slidesRef.current.length - 2);
			slideContainer.current.style.transform =
				"translateX(" + -size * counter + "px)";
			console.log("on last clone");
		}

		if (slidesRef.current[counter].id === "firstClone") {
			slideContainer.style.transition = "none";
			setCounter(slidesRef.current.length - counter);
			slideContainer.current.style.transform =
				"translateX(" + -size * counter + "px)";
			console.log("on first clone");
		}
	};

	const forwardBtn = () => {
		if (counter >= slidesRef.current.length - 1) return;
		slideContainer.current.style.transition = "transform 0.4s ease-in-out";
		setCounter(old => old++);
		slideContainer.current.style.transform =
			"translateX(" + -size * counter + "px)";
	};

	const backwardsBtn = () => {
		if (counter >= slidesRef.current.length - 1) return;
		slideContainer.current.style.transition = "transform 0.4s ease-in-out";
		setCounter(old => old--);
		slideContainer.current.style.transform =
			"translateX(" + -size * counter + "px)";
	};

	useEffect(() => console.log("counter changed:", counter), [counter]);

	return (
		<section className="slide-container">
			<div className="chevrons">
				<i
					className="fa-solid fa-circle-chevron-left chevron"
					id="prev-btn"
					onClick={backwardsBtn}
				></i>
				<i
					className="fa-solid fa-circle-chevron-right chevron"
					id="next-btn"
					onClick={forwardBtn}
				></i>
			</div>

			<div
				className="slides"
				ref={slideContainer}
				onTransitionEnd={transitionEnd}
			>
				<div
					className="slide"
					id="lastClone"
					ref={el => (slidesRef.current[0] = el)}
				>
					<img
						src={require("../media/desktop-screenshots/comment-section.png")}
						alt=""
					/>
				</div>
				{/* MAIN */}
				{projectLinks.map((project, index) => (
					<div
						className="slide"
						ref={el => (slidesRef.current[index + 1] = el)}
						key={index}
					>
						<img
							src={require(`../media/${project.desktop}`)}
							alt=""
						/>
					</div>
				))}
				{/* END OF MAIN */}
				<div
					className="slide"
					id="firstClone"
					ref={el => (slidesRef.current[4] = el)}
				>
					<img
						src={require("../media/desktop-screenshots/github-jobs.png")}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}

export default Slideshow;
