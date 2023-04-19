import axios from "axios";

export const getDashboardData = async (company_id) => {
    return await axios.get(`/api/v1/dashboard/${company_id}`)
};


export const getDashboardChartData = async (company_id) => {
    return await axios.get(`/api/v1/dashboard_chart/${company_id}`)
};