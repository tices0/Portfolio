import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const projectLinks = [
	// github jobs
	{
		live: "https://github-jobs-f3d40.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/github-jobs",
		markdown: "https://raw.githubusercontent.com/tochidavids/React-Projects/master/github-jobs/README.md",
    desktop: "desktop-screenshots/github-jobs.png"
	},
	// weather app
	{
		live: "https://weather-app-e04df.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/weather",
		markdown: "https://raw.githubusercontent.com/tochidavids/React-Projects/master/weather/README.md",
    desktop: "desktop-screenshots/weather-app.png"
	},
	// interactive comment section
	{
    live: "https://interactive-comment-sect-e566e.web.app/",
		code: "https://github.com/tochidavids/React-Projects/tree/master/interactive-comment-section",
		markdown: "https://raw.githubusercontent.com/tochidavids/React-Projects/master/interactive-comment-section/README.md",
    desktop: "desktop-screenshots/comment-section.png"
	},
];

export const getMarkdown = async (project) => {
    const markdown = await fetch(projectLinks[project].markdown)
    const res = await markdown.text()
    console.log(res)
    return res
}

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

export const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
  return d;
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
