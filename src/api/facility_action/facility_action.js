import axios from "axios";

export const getFacilityAction = async (company_id, query = {}) => {
  return await axios.get(`/api/v1/facility-collection/${company_id}`, {
    params: {
      fuel_source_name: query.fuelSource,
      activity_type_name: query.activityType,
    },
  });
};

export const createFacilityAction = async (payload) => {
  return await axios.post("/api/v1/facility-collection", payload);
};
