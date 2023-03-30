import axios from "axios";

export const createCompanyInformation = async (payload) => {
  return await axios.post("/api/v1/company", payload);
};

export const getCompanyInformation = async () => {
  return await axios.get("/api/v1/company", {
    params: { page_size: 10, page: 1, sort_by: "id", order: "desc" },
  });
};
