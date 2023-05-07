import axios from 'axios';

const axiosIntance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
export const swrFetcher = async (url, queryParams = '') => {
    const response = await axiosIntance.get(`${url}`, {params: queryParams})
    const data = response?.data
  
    return data
}