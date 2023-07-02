import React, { useState } from "react";
import "./styles/styles.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
	const [activePage, setActivePage] = useState(0);

	return (
		<>
			<NavBar activePage={activePage} setActivePage={setActivePage} />
			<Home />
		</>
	);
}

export default App;
