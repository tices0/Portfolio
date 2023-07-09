import React from "react";
import ContactForm from "../components/Contact";

function Contact() {
	return (
		<main className="pages" id="contact-page">
			<section className="social-links">
				<a
					href="https://github.com/tochidavids"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-github"></i> tochidavids
				</a>
				<a
					href="https://www.linkedin.com/in/tochi-davids/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-linkedin-in"></i> tochidavids
				</a>
				<a
					href="tel:+447449304436"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-solid fa-phone"></i> 07449 304436
				</a>
				<a
					href="mailto:tochidavids18@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-solid fa-envelope"></i>{" "}
					tochidavids18@gmail.com
				</a>
			</section>

			<section className="contact-form">
				<ContactForm />
			</section>
		</main>
	);
}

export default Contact;
