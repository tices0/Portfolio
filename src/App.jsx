import React, { useState } from "react";
import "./styles/styles.css";
import NavBar from "./components/NavBar";

function App() {
	const [activePage, setActivePage] = useState(0);

	return (
		<>
			<NavBar activePage={activePage} setActivePage={setActivePage} />
		</>
	);
}

export default App;
