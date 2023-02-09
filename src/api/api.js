import axios from "axios";

const API = axios.create({
  baseURL: "http://139.162.137.51:80/api/collections/",
});

export async function fetchTasks() {
  return API.get("tasks/records").then((response) => response.data.items);
}
