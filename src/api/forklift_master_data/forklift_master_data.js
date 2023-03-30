import axios from "axios";

export const getForklift = async (facilityMasterDataId) => {
  return await axios.get(
    `/api/v1/forklift-master-data/${facilityMasterDataId}`
  );
};
