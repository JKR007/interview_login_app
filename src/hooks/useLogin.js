import { useCallback, useState } from "react";
import { login } from "../api";

export const useLogin = () => {
  const [{ email, password }, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const onLogin = useCallback(
    async (event) => {
      event.preventDefault();

      if (!email) {
        setError("Email should be required");
        return;
      }
      if (!password && password.length >= 6) {
        setError("Password should be required");
        return;
      }
      try {
        await login(email, password);
        setError("");
        setState({ password: "", email: "" });
        alert("SUCCESSFULLY");
      } catch (err) {
        setError(err);
        console.log("[Error-onLogin]:", err);
      }
    },
    [email, password]
  );

  return {
    onChange,
    email,
    password,
    onLogin,
    error,
  };
};
