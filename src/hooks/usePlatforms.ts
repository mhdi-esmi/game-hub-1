import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import Platform  from "../entities/Platform";


const apiClient =new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
  queryKey:['platforms'],
  queryFn:apiClient.getAll,
  // staleTime:24*60*60*1000,//24h
  staleTime:ms('24h'),//24h
  initialData:platforms
  // initialDatas:{count:platforms.length,next:null,results:platforms}
})

export default usePlatforms;
