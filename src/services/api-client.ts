import axios from "axios";


export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4631d08167a4e0c8c8c0c53e3fb43b4",
  },
});
