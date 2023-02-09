import axios from "axios";

const API = axios.create({
  baseURL: "http://139.162.137.51:80/api/collections/",
  withCredentials: true,
});

export default API;
