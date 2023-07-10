import React from "react";

function About() {
	return (
		<main className="pages" id="about-page">
			{window.innerWidth > 825 ? "" : <h1 className="title">About Me</h1>}
			<div className="about-me">
				<p>
					I completed an <b>internship</b> last summer at{" "}
					<a
						href="http://ig.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						IG London
					</a>{" "}
					where I collaborated on a mock app design which would allow
					students to find internships opportunities near them.
					Consequently, I presented this project to an audience of 20
					senior employees of the company.
				</p>
				<div className="line"></div>
				<p>
					I enjoy completing <b>coding challenges</b>, such as the
					frontend challenges on{" "}
					<a
						href="http://devchallenges.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dev Challenges
					</a>{" "}
					and{" "}
					<a
						href="https://www.frontendmentor.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Frontend Mentor
					</a>
					, where I am given a design to replicate and user stories to
					achieve in order to complete the challenge.
				</p>
				<p>
					I am part of a football academy and take part in athletics
					competitively - I am currently <b>11th in the UK</b> in my
					age group for the 60m sprint.
				</p>
				<a
					className="cv-link"
					href="/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="cv">
						CV <i className="fa-solid fa-file-export"></i>
					</div>
				</a>
			</div>
			<div className="info-box frontend">
				<h1>Frontend</h1>
				<ul className="technologies">
					<li className="technology">
						<i className="fa-brands fa-html5"></i> HTML
					</li>
					<li className="technology">
						<i className="fa-brands fa-css3-alt"></i> CSS
					</li>
					<li className="technology">
						<i className="fa-brands fa-bootstrap"></i> Bootstrap
					</li>
					<li className="technology">
						<i className="fa-brands fa-sass"></i> SCSS
					</li>
					<li className="technology">
						<i className="fa-brands fa-square-js"></i> Javascript
					</li>
					<li className="technology">
						<i className="fa-brands fa-react"></i> React JS
					</li>
				</ul>
			</div>
			<div className="info-box end backend">
				<h1>Backend</h1>
				<ul className="technologies">
					<li className="technology">
						<i className="fa-brands fa-python"></i> Python
					</li>
					<li className="technology">
						<i className="django">dj</i> Django
					</li>
					<li className="technology">
						<i className="fa-solid fa-database"></i> SQLite
					</li>
				</ul>
			</div>
			<div className="info-box end tools">
				<h1>Tools</h1>
				<ul className="technologies">
					<li className="technology">
						<i className="fa-brands fa-git-alt"></i> Git
					</li>
					<li className="technology">
						<i className="fa-brands fa-github"></i> Github
					</li>
					<li className="technology">
						<i className="fa-brands fa-linux"></i> Linux
					</li>
					<li className="technology">
						<i className="fa-brands fa-figma"></i> Figma
					</li>
				</ul>
			</div>
		</main>
	);
}

export default About;
