import axios from "axios";

export const login = async (payload) => {
  return await axios.post("/api/v1/login", payload);
};

export const getAuthInfo = async () => {
  return await axios.get("/api/v1/user_detail");
};
