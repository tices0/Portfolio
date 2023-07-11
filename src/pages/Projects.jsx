import React, { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";
import MobileProjects from "../components/MobileProjects";
import { projectLinks } from "..";

function Projects() {
	const [project, setProject] = useState(0);
	const [showSlideshow, setShowSlideshow] = useState();

	useEffect(() => {
		if (typeof showSlideshow === "undefined") {
			if (window.innerWidth > 825) setShowSlideshow(true);
			else setShowSlideshow(false);
		}

		window.addEventListener("resize", () => {
			if (window.innerWidth > 825) setShowSlideshow(true);
			else setShowSlideshow(false);
		});
		// eslint-disable-next-line
	}, []);

	return (
		<main className="pages" id="projects-page">
			{showSlideshow ? (
				<>
					<ul className="tech-used">
						{projectLinks[project].tech.map((value, index) => (
							<li key={index} className="tech">
								{value}
							</li>
						))}
					</ul>
					<Slideshow setProject={setProject} project={project} />
					<nav className="project-info">
						{projectLinks[project].live ? (
							<div className="link">
								<a
									href={projectLinks[project].live}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa-solid fa-globe"></i>
									Live
								</a>
							</div>
						) : (
							""
						)}
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
					</nav>
				</>
			) : (
				<MobileProjects />
			)}
		</main>
	);
}

export default Projects;
