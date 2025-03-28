import { useNavigate } from "react-router-dom";
import { axiosClient } from "./axios";

export const register = async (fullName, email, password, role) => {
  try {
    const res = await axiosClient.post("/api/auth/register", {
      fullName,
      email,
      password,
      role,
    });
    console.log(res.data);
    const navigate = useNavigate();
    navigate("/login");
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axiosClient.post("/api/auth/login", { email, password });
    console.log(res.data);
    localStorage.setItem("token", res.data.accessToken);
    const navigate = useNavigate();
    navigate("/dashboard");
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export const logout = async () => {
  try {
    const res = await axiosClient.post("/api/auth/logout");
    console.log(res.data);
    localStorage.removeItem("token");
    const navigate = useNavigate();
    navigate("/login");
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
};
