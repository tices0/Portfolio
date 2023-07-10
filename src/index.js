import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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
		info: 'Use "example1@email.com" and "example2@email.com" (password is "password" for both) to log in for a quick demo',
		live: "https://github-jobs-f3d40.web.app/",
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

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
	const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
};

export const describeArc = (x, y, radius, startAngle, endAngle) => {
	const start = polarToCartesian(x, y, radius, endAngle);
	const end = polarToCartesian(x, y, radius, startAngle);
	const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
	const d = [
		"M",
		start.x,
		start.y,
		"A",
		radius,
		radius,
		0,
		largeArcFlag,
		0,
		end.x,
		end.y,
	].join(" ");
	return d;
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
