import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "portfolio";
const TEMPLATE_ID = "portfolio";
const USER_ID = "DeMZctYSP2J8uNHYi";

function ContactForm() {
	const formRef = useRef();

	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
			.then(
				result => {
					alert("message sent successfully...");
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				},
			);
	};

	return (
		<form ref={formRef} onSubmit={sendEmail}>
			<h1>Contact Me</h1>
			<div className="top">
				<input type="text" placeholder="Firstname" name="firstname" />
				<input type="text" placeholder="Lastname" name="lastname" />
			</div>
			<input type="email" name="user_email" id="" placeholder="Email" />
			<textarea
				placeholder="Content"
				name="message"
				id=""
				cols="30"
				rows="10"
			></textarea>
			<input type="submit" className="send" value="SEND" />
		</form>
	);
}

export default ContactForm;
