import React, { useState } from "react";
import Slideshow from "../components/Slideshow";

const projectLinks = [
	// github jobs
	{
		live: "https://github-jobs-f3d40.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/github-jobs",
		md: "https://raw.githubusercontent.com/tochidavids/React-Projects/master/github-jobs/README.md",
	},
	// weather app
	{
		live: "https://weather-app-e04df.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/weather",
		md: "https://raw.githubusercontent.com/tochidavids/React-Projects/master/weather/README.md",
	},
	// interactive comment section
	{
		live: "https://interactive-comment-sect-e566e.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/interactive-comment-section",
		md: "https://raw.githubusercontent.com/tochidavids/React-Projects/master/interactive-comment-section/README.md",
	},
];

function Projects() {
	const [page, setPage] = useState(0);

	return (
		<main className="pages" id="projects-page">
			{/* <i className="fa-solid fa-chevron-right"></i>
			<i className="fa-solid fa-chevron-left"></i>
			<ul className="projects-container">
				<li className="project"></li>
				<li className="project"></li>
				<li className="project"></li>
			</ul> */}
			<Slideshow setPage={setPage} />
			<nav className="project-info">
				<div className="link">
					<a
						href={projectLinks[page].live}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-house"></i>
						Live
					</a>
				</div>
				<div className="link">
					<a
						href={projectLinks[page].code}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-code"></i>
						Source Code
					</a>
				</div>
				<div className="link">
					<i class="fa-solid fa-info"></i>
					README
				</div>
			</nav>
		</main>
	);
}

export default Projects;
