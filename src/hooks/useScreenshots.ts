import { useQuery } from "@tanstack/react-query"
import { Screenshot } from "../entities/Screenshot"
import APIClient from "../services/api-client"

const useScreenshots=(id:number)=>{
    const apiClient=new APIClient<Screenshot>(`/games/${id}/screenshots`)
    return useQuery({queryKey:['screenshot',id],
    queryFn:apiClient.getAll
})
}

export default useScreenshots