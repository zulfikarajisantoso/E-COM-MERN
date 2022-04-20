import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

export const userred = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
