import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ScrollToTopOnMount, SectionsContainer } from "react-fullpage";

let options = {
	sectionClassName: "pages",
	anchors: ["home", "projects", "about", "contact"],
	scrollBar: false,
	navigation: true,
	activeClass: "active",
};

function App() {
	const [disableScroll, setDisableScroll] = useState();

	useEffect(() => {
		if (typeof disableScroll === "undefined") {
			if (window.innerWidth > 825) setDisableScroll(false);
			else setDisableScroll(true);
		}

		window.addEventListener("resize", () => {
			if (window.innerWidth > 825) setDisableScroll(false);
			else setDisableScroll(true);
		});
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{disableScroll ? (
				<>
					<Home />
					<Projects />
					<About />
					<Contact />
				</>
			) : (
				<>
					<ScrollToTopOnMount />
					<SectionsContainer {...options}>
						<Home />
						<Projects />
						<About />
						<Contact />
					</SectionsContainer>{" "}
				</>
			)}
		</>
	);
}

export default App;
