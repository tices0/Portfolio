import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

console.log(window.innerWidth);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

export const projectLinks = [
	// github jobs
	{
		title: "Job Board",
		tech: [
			"React JS",
			"SASS",
			"Pagination",
			"Google Jobs API",
			"Reverse Geolocation",
		],
		live: "https://github-jobs-f3d40.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/github-jobs",
		image: "github-jobs.png",
	},
	// email server
	{
		title: "Email Server",
		tech: ["Django", "Python", "Javascript", "Bootstrap", "CRUD"],
		code: "https://github.com/tochidavids/Email-Server",
		image: "email-server.png",
	},
	// weather app
	{
		title: "Weather App",
		tech: ["React JS", "SASS", "Weather API", "Reverse Geolocation"],
		live: "https://weather-app-e04df.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/weather",
		image: "weather-app.png",
	},
];

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
