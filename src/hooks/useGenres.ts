import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import  Genre  from "../entities/Genre";



const apiClient =new APIClient<Genre>('/genres');
const useGenres = () => 
  useQuery({
      queryKey: ['genres'],
      queryFn: apiClient.getAll,
        // staleTime:24*60*60*1000,//24h
      staleTime:ms('24h'),//24h
      initialData:genres
      // initialData: { count: genres.length,next:null, results: genres }
});
  

  // return  useData<Genre>('/genres')
  // { data: genres, isLoading: false, error: null }


export default useGenres;