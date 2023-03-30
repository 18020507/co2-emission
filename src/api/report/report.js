import axios from "axios";

export const getStationaryCombustion = async (company_id) => {
  return await axios.get(`/api/v1/report-stationary/${company_id}`);
};

export const getMobileCombustion = async (company_id) => {
  return await axios.get(`/api/v1/report-mobile-combustion/${company_id}`);
};
