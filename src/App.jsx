import React from "react";
import "./styles/styles.css";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { SectionsContainer, Section } from "react-fullpage";

const options = {
	sectionClassName: "pages",
	anchors: ["home", "projects", "about", "contact"],
	scrollBar: false,
	navigation: false,
};

function App() {
	// const [activePage, setActivePage] = useState(0);

	return (
		<SectionsContainer {...options}>
			{/* <NavBar activePage={activePage} setActivePage={setActivePage} /> */}
			<Home />
			<Projects />
			<About />
			<Contact />
		</SectionsContainer>
	);
}

export default App;
