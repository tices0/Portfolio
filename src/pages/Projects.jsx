import React, { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";
import MobileProjects from "../components/MobileProjects";
import { projectLinks } from "..";

function Projects() {
	const [project, setProject] = useState(0);
	const [showInfo, setShowInfo] = useState(false);
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
					<Slideshow
						setProject={setProject}
						project={project}
						showInfo={showInfo}
					/>
					<nav className="project-info">
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
						<div
							className="link"
							onClick={() => setShowInfo(old => !old)}
						>
							<i className="fa-solid fa-info"></i>
							Info
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
