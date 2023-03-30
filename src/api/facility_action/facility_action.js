import axios from "axios";
import { isArray } from "lodash-es";

export const getFacilityAction = async (facility_id) => {
  let ids = facility_id;
  if (isArray(facility_id)) {
    ids = facility_id.join(",");
  }

  return await axios.get(`/api/v1/facility-collection/${ids}`);
};

export const createFacilityAction = async (payload) => {
  return await axios.post("/api/v1/facility-collection", {
    params: payload,
  });
};
