import axios from "axios";

const api = axios.create({
  baseURL: "https://draw-backend-5x3l.onrender.com/api"
});

export default api;
