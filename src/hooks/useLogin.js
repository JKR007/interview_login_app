import { useCallback, useState } from "react";
import { login } from "../api";

const initialState = {
  email: "",
  password: "",
};

export const useLogin = () => {
  const [{ email, password }, setState] = useState(initialState);
  const [error, setError] = useState("");

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const clearAll = useCallback(() => {
    setState(initialState);
    setError("");
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
        clearAll();
        alert("SUCCESSFULLY");
      } catch (err) {
        setError(err);
        console.log("[Error-onLogin]:", err);
      }
    },
    [clearAll, email, password]
  );

  return {
    onChange,
    email,
    password,
    onLogin,
    error,
  };
};
