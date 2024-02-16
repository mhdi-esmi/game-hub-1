import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count: number;
  next:string|null;
  results: T[];
}

const axiosInstance= axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4631d08167a4e0c8c8c0c53e3fb43b4",
  },
});

class APIClient<T>{
  endpoint:string;

  constructor(endpoint:string){
    this.endpoint=endpoint

  }

  getAll = (config:AxiosRequestConfig)=>{
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint,config)
    .then(res=>res.data);
  }

  get=()=>{
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint)
    .then(res=>res.data);
  }
  
}

export default APIClient
