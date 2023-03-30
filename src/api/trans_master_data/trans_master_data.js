import axios from "axios";

export const getDataTransport = async (company_id) => {
    return await axios.get(`/api/v1/transportation-master-data/${company_id}`)
};