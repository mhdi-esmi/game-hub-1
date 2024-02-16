import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { Game } from "./useGames";



const apiClient =new APIClient<Genre>('/genres');
export interface Genre {
  id: number;
  name: string;
  slug:string;
  games_count:number;
  image_background: string;  
  games:any[]
  
}

const useGenres = () => 
  useQuery({
      queryKey: ['genres'],
      queryFn: apiClient.get,
      staleTime: 24 * 60 * 60 * 1000, //24h
      initialData: { count: genres.length,next:null, results: genres }
});
  

  // return  useData<Genre>('/genres')
  // { data: genres, isLoading: false, error: null }


export default useGenres;