import React from "react";
import "./styles/styles.css";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ScrollToTopOnMount, SectionsContainer } from "react-fullpage";

const options = {
	sectionClassName: "pages",
	anchors: ["home", "projects", "about", "contact"],
	scrollBar: false,
	navigation: true,
	activeClass: "active",
};

function App() {
	return (
		<>
			<ScrollToTopOnMount />
			<SectionsContainer {...options}>
				<Home />
				<Projects />
				<About />
				<Contact />
			</SectionsContainer>
		</>
	);
}

export default App;
