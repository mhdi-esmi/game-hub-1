import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn:()=>
  apiClient
  .get<FetchResponse<Genre>>('/genres').then(res=>res.data),
  staleTime:24*60*60*1000,//24h
  initialData:{count:genres.length,results:genres}
});
  

  // return  useData<Genre>('/genres')
  // { data: genres, isLoading: false, error: null }


export default useGenres;