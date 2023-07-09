import React from "react";

function Contact() {
	return (
		<main>
            <section className="send-mail">
                <form action="">
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="text" placeholder=""/>
                    <textarea placeholder="" name="" id="" cols="30" rows="10"></textarea>
                </form>
            </section>
			
			<section className="social-links">
				<a
					href="https://github.com/tochidavids"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/tochi-davids/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
				<a href="tel:+447449304436" target="_blank"
					rel="noopener noreferrer">
					<i className="fa-solid fa-phone"></i>
				</a>
				<a href="mailto:tochidavids18@gmail.com" target="_blank"
					rel="noopener noreferrer">
					<i className="fa-solid fa-envelope"></i>
				</a>
			</section>
		</main>
	);
}

export default Contact;
