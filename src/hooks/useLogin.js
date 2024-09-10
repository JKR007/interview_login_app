import { useCallback, useState } from "react";
import { login } from "../api";

const initialState = {
  email: "",
  password: "",
};

export const useLogin = () => {
  const [{ email, password }, setState] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const clearAll = useCallback(() => {
    setState(initialState);
    setError("");
    setLoading(false);
  }, []);

  const onLogin = useCallback(
    async (event) => {
      event.preventDefault();
      setError("");
      setLoading(true);

      if (!email && !password) {
        setError("Email and Password are required");
        setLoading(false);
        return;
      }

      if (!email) {
        setError("Email is required");
        setLoading(false);
        return;
      }

      if (!password) {
        setError("Password is required");
        setLoading(false);
        return;
      } else if (password.length < 6) {
        setError("Password must be at least 6 characters long");
        setLoading(false);
        return;
      }

      try {
        await login(email, password);
        clearAll();
        alert("Login Successful!");
      } catch (err) {
        setError(
          typeof err === "string" ? err : "An unexpected error occurred."
        );
        setLoading(false);
        console.error("[Error-onLogin]:", err);
      }
    },
    [clearAll, email, password]
  );

  const actions = {
    onChange,
    onLogin,
  };

  const values = {
    email,
    password,
    error,
    loading,
  };

  return {
    actions,
    values,
  };
};
