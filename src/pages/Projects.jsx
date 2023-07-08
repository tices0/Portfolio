import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import { getMarkdown, projectLinks } from "..";
import ReactMarkdown from "https://esm.sh/react-markdown@7";

function Projects() {
	const [project, setProject] = useState(0);
	const [showMD, setShowMD] = useState(false);
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		// const oldMarkdown = markdown
		const addMarkdown = async () => {
			if (showMD) {
				const readme = await getMarkdown(project)
				setMarkdown(readme)
			}

		}

		addMarkdown()
	}, [showMD, project]);

	return (
		<main className="pages" id="projects-page">
			<Slideshow setProject={setProject} />
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
				<div className="link" onClick={() => setShowMD(old => !old)}>
					<i className="fa-solid fa-info"></i>
					README
				</div>
			</nav>
			{showMD ? (
				<article className="markdown-container">
					<ReactMarkdown children={markdown} />
				</article>
			) : (
				""
			)}
		</main>
	);
}

export default Projects;
