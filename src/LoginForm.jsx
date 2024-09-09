import React from "react";
import { login } from "./api";
import { useLogin } from "./hooks/useLogin";

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
  const { onChange, email, password, onLogin, error } = useLogin();
  return (
    <form>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={onChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      {/* Display form error messages inside the "div". Show "div" ONLY if there are login error */}
      {!!error && (
        <div style={{ color: "red", marginBottom: "16px" }}>{error}</div>
      )}
      <button type="submit" onClick={onLogin}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
