import { useState } from "react";
import RegisterContext from "./RegisterContext";
import { register } from "../../../library/auth";

const RegisterContextProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(fullName, email, password, confirmPassword);
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      const res = await register(fullName, email, password, "developer");
      setMessage(res.message || "Registered successfully");
    } catch (err) {
      setMessage("Registration failed");
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
