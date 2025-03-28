import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://gameplatform-api.wishalpha.com/",
  withCredentials: true,
});
