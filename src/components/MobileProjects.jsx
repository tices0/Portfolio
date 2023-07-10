import React from "react";
import { projectLinks } from "..";

function MobileProjects() {
	return (
		<ul className="mobile-projects">
			{projectLinks.map((value, index) => (
				<li key={index} className="project">
					<h1>{value.title}</h1>
					<div className="top">
						<div className="img-container">
							<img
								src={require(`../media/${value.image}`)}
								alt=""
							/>
						</div>
						<div className="project-info">
							<div className="link">
								<a
									href={value.live}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa-solid fa-globe"></i>
									{window.innerWidth > 300 ? "Live" : ""}
								</a>
							</div>
							<div className="link">
								<a
									href={value.code}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa-solid fa-code"></i>
									{window.innerWidth > 300
										? "Source Code"
										: ""}
								</a>
							</div>
						</div>
					</div>
					<ul className="tech-used">
						{value.tech.map((value, index) => (
							<li className="tech" key={index}>
								{value}
							</li>
						))}
					</ul>
					<p>{value.info || ""}</p>
				</li>
			))}
		</ul>
	);
}

export default MobileProjects;
