import { useNavigate } from "react-router-dom";
import { axiosClient } from "./axios";

export const uploadGame = async (
  projectId,
  gameName,
  genre,
  thumbnail,
  description,
  projectFile
) => {
  try {
    const res = await axiosClient.post("/api/auth/register", {
      projectId,
      gameName,
      genre,
      thumbnail,
      description,
      projectFile,
    });
    console.log(res.data);
    const navigate = useNavigate();
    navigate("/games");
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export const createProject = async () => {
  try {
    const res = await axiosClient.post("/api/auth/register", {
      projectId,
      gameName,
      genre,
      thumbnail,
      description,
      projectFile,
    });
    console.log(res.data);
    const navigate = useNavigate();
    navigate("/games");
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
};
