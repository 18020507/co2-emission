import axios from "axios";

export const getActivityType = async (company_id) => {
  return await axios.get(`/api/v1/activity/${company_id}`);
};

