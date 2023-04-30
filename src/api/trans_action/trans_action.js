import axios from "axios";

export const getTransAction = async (company_id, query={}) => {
  return await axios.get(`/api/v1/transportation-collection/${company_id}`, {
    params: {
      fuel_source_name: query.fuelSource,
      client_name: query.client,
    },
  });
};

export const createTransAction = async (payload) => {
  return await axios.post("/api/v1/transportation-collection", payload);
};
