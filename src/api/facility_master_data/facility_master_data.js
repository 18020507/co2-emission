import axios from "axios";

export const getDataFacility = async (company_id) => {
    return await axios.get(`/api/v1/facility-master-data/${company_id}`)
};