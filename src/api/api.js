import axios from "axios";

const API = axios.create({
  baseURL: "http://139.162.137.51:80/api/collections/",
});

export async function fetchTasks() {
  const data = await API.get("tasks/records");
  console.log(data.data.items);
  return data.data.items;
}
