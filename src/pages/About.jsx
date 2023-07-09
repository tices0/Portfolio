import React from "react";

function About() {
	return (
		<main className="pages" id="about-page">
			<div className="info-box frontend">
				<h1>Frontend</h1>
				<ul className="technologies">
					<li className="technology">
						<i class="fa-brands fa-html5"></i> HTML
					</li>
					<li className="technology">
						<i class="fa-brands fa-css3-alt"></i> CSS
					</li>
					<li className="technology">
						<i class="fa-brands fa-bootstrap"></i> Bootstrap
					</li>
					<li className="technology">
						<i class="fa-brands fa-sass"></i> SCSS
					</li>
					<li className="technology">
						<i class="fa-brands fa-square-js"></i> Javascript
					</li>
					<li className="technology">
						<i class="fa-brands fa-react"></i> React JS
					</li>
				</ul>
			</div>
			<div className="info-box backend">
				<h1>Backend</h1>
				<p>
					I understand the backend process as a result of my experinec
					using the <i>Python Django</i> framework, which I learnt
					through{" "}
					<i>
						Harvard's CS50 Introduction to Web Programming using
						Python and Javascript
					</i>
					.
				</p>
				<ul className="technologies">
					<li className="technology">
						<i class="fa-brands fa-python"></i> Python
					</li>
					<li className="technology">
						<i className="django">dj</i> Django
					</li>
					<li className="technology">
						<i class="fa-solid fa-database"></i> SQLite
					</li>
				</ul>
			</div>
			<div className="info-box tools end">
				<h1>Tools</h1>
				<ul className="technologies">
					<li className="technology">
						<i class="fa-brands fa-git-alt"></i> Git
					</li>
					<li className="technology">
						<i class="fa-brands fa-github"></i> Github
					</li>
					<li className="technology">
						<i class="fa-brands fa-linux"></i> Linux
					</li>
					<li className="technology">
						<i class="fa-brands fa-figma"></i> Figma
					</li>
				</ul>
			</div>
			<div className="info-box cv end">
				<a href="/" target="_blank" rel="noopener noreferrer">
					<h1>CV</h1>
				</a>
			</div>
		</main>
	);
}

export default About;
