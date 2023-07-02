import React, { useLayoutEffect, useRef } from "react";

const links = ["Home", "Projects", "About", "Contact"];

function NavBar({ activePage, setActivePage }) {
	const linksRef = useRef([]);

	useLayoutEffect(() => {
		linksRef.current.forEach(
			(link, index) => (linksRef.current[index].style.color = "#fff"),
		);
		linksRef.current[activePage].style.color = "#d73e3f";
		// linksRef.current[activePage].style.hover.color = "green";
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
							onMouseEnter={() =>
								(linksRef.current[index].style.color =
									"#d73e3f")
							}
							onMouseLeave={() =>
								activePage !== index
									? (linksRef.current[index].style.color =
											"#fff")
									: ""
							}
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
