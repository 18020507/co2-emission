import axios from "axios";
import { isArray } from "lodash-es";

export const getTransAction = async (trans_id) => {
  let ids = trans_id;
  if (isArray(trans_id)) {
    ids = trans_id.join(",");
  }
  return await axios.get(`/api/v1/transportation-collection/${ids}`);
};

export const createTransAction = async (payload) => {
  return await axios.post("/api/v1/transportation-collection", {
    params: payload,
  });
};
