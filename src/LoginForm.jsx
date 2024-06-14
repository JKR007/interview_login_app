import React, { useState } from "react";
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
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.length || password.length < 6) return;
    setIsLoading(true);
    setError("");
    try {
      const response = await login(email, password);
      console.log("Login successful:", response);
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form>
      <div>
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
      </div>
      {/* Display form error messages inside the "div". Show "div" ONLY if there are login error */}
      {error && (
        <div style={{ color: "red", marginBottom: "16px" }}>{error}</div>
      )}
      <button
        disabled={isLoading || !email.length || password.length < 6}
        onClick={handleLogin}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
