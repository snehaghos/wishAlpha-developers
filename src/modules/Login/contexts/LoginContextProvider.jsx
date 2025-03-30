import { useState } from "react";
import LoginContext from "./LoginContext";
import { login } from "../../../library/auth";

const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await login(email, password);
      setMessage(res.message || "Logged in successfully");
    } catch (err) {
      setMessage("Login failed");
    }
  };

  return (
    <LoginContext.Provider
      value={{ email, setEmail, password, setPassword, handleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;