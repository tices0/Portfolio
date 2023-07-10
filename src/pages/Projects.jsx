import React, { useState } from "react";
import Slideshow from "../components/Slideshow";
import {  projectLinks } from "..";

function Projects() {
	const [project, setProject] = useState(0);
	const [showInfo, setShowInfo] = useState(false)

	return (
		<main className="pages" id="projects-page">
			<Slideshow setProject={setProject} project={project} showInfo={showInfo} />
			<nav className="project-info">
				<div className="link">
					<a
						href={projectLinks[project].live}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-house"></i>
						Live
					</a>
				</div>
				<div className="link">
					<a
						href={projectLinks[project].code}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-code"></i>
						Source Code
					</a>
				</div>
				<div className="link" onClick={() => setShowInfo(old => !old)}>
						<i className="fa-solid fa-info"></i>
						Info
				</div>
			</nav>
		</main>
	);
}

export default Projects;
