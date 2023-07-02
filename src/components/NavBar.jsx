import React, { useLayoutEffect, useRef } from "react";

const links = ["Home", "Projects", "Contact"];

function NavBar({ activePage, setActivePage }) {
	const linksRef = useRef([]);

	useLayoutEffect(() => {
		linksRef.current.forEach(
			(link, index) => (linksRef.current[index].style.color = "#fff"),
		);
		linksRef.current[activePage].style.color = "#d73e3f";
	}, [activePage]);

	return (
		<section className="nav-bar">
			<nav>
				<ul>
					{links.map((value, index) => (
						<li
							key={index}
							ref={el => (linksRef.current[index] = el)}
							onClick={() => setActivePage(index)}
						>
							{index === activePage ? (
								<i className="fa-solid fa-circle"></i>
							) : (
								""
							)}
							{value}
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default NavBar;
