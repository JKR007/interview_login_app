import React, { useEffect, useState } from "react";
import { login } from "./api";

// ======================== LOGIN FORM ======================
//  * You have an incomplete login form
//  * You are not allowed to add any additional HTML element
//  * You are not allowed to use refs
//
//
// Tasks:

// * The "Login" button should trigger the "login()" action imported above and should pass the required data
// * Disable the "Login" button if email is blank OR if password is less than 6 letters
// * Disable the "Login" button while "login()" action is being performed
// * Show an error message from the "login()" action is being performed. The error message should be cleared every time user re-attempts to login
// * Show an alert box (native Javascript alert) if login succeeds. CHECK THE "login()" FUNCTION TO FIND OUT HOW TO LOGIN SUCCESSFULLY.

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(true);

	const handleSubmit = () => {
		setDisabled(true);
		setEmail();
	};

	useEffect(() => {
		if (email.length <= 0 || password.length < 6) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [email, password]);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email:</label>
				<input
					type='email'
					required
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type='password'
					required
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
			</div>
			{/* Display form error messages inside the "div". Show "div" ONLY if there are login error */}
			<div style={{ color: "red", marginBottom: "16px" }}></div>
			<button type='submit' disabled={disabled}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
