import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count: number;
  next:string|null;
  results: T[];
}

const axiosInstance= axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d39e469f48264cedb103fb2ba574789e",
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
