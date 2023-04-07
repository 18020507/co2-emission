import axios from "axios";

export const getForklift = async (facilityMasterDataId) => {
  return await axios.get(
    `/api/v1/forklift-master-data/${facilityMasterDataId}`
  );
};

export const createDataMaster = async (payload) => {
  return await axios.post(`/api/v1/forklift-master-data`, payload);
};