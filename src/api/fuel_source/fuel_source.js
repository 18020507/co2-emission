import axios from "axios";

export const getFuelSource = async (company_id) => {
  return await axios.get(`/api/v1/fuel-source/${company_id}`);
};

