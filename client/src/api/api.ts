import axios from "axios";

const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("jwt"));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

const token = getAuthTokenFromCookie();

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json", // זו הגדרה כללית לשימוש בכל הבקשות
  },
  withCredentials: true,
});

export const apiToken = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});
