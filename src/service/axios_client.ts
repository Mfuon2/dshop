import axios from 'axios';

const axiosInstance = (base_url: any, headers: any) => {
  return axios.create({
    baseURL: base_url,
    headers: headers
  });

}
export default axiosInstance
