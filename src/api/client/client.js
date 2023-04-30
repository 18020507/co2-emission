import axios from "axios";

export const getClient = async (company_id) => {
  return await axios.get(`/api/v1/client/${company_id}`);
};

