import { create } from "zustand";

 interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore{
    gameQuery:GameQuery
    setSerchedText:(searchText:string)=>void;
    setSortOrder:(searchText:string)=>void;
    setPlatformId:(searchText:number)=>void;
    setGenreId:(searchText:number)=>void;
}

const useGameQueryStore=create<GameQueryStore>(set=>({
  gameQuery:{},
  setGenreId:genreId=>set(store=>({gameQuery:{...store.gameQuery,genreId}})),
  setPlatformId:platformId=>set(store=>({gameQuery:{...store.gameQuery,platformId}})),
  setSortOrder:sortOrder=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}})),
  setSerchedText:searchText=>set(()=>({gameQuery:{searchText}}))
    
}))

export default useGameQueryStore