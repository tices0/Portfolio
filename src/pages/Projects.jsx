import React from "react";
import Slideshow from "../components/Slideshow";

function Projects() {
	return (
		<main className="pages" id="projects-page">
			{/* <i className="fa-solid fa-chevron-right"></i>
			<i className="fa-solid fa-chevron-left"></i>
			<ul className="projects-container">
				<li className="project"></li>
				<li className="project"></li>
				<li className="project"></li>
			</ul> */}
			<Slideshow />
			<nav className="project-info">
				<i className="fa-solid fa-house"></i>
				<i className="fa-solid fa-code"></i>
				<i class="fa-solid fa-info"></i>
			</nav>
		</main>
	);
}

export default Projects;
