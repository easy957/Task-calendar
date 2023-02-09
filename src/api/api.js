import axios from "axios";

const API = axios.create({
  baseURL: "http://139.162.137.51:80/api/collections/",
});

export function fetchTasks() {
  API.get("tasks/records").then((response) => {
    return response;
  });
}
