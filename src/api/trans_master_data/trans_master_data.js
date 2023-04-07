import axios from "axios";

export const getDataTransport = async (company_id) => {
    return await axios.get(`/api/v1/transportation-master-data/${company_id}`)
};

export const createTransDataMaster = async (payload) => {
    return await axios.post(`/api/v1/transportation-master-data`, payload);
};