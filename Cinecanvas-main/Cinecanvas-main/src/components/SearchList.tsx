//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { SearchResultContext } from "@/context/searchResult.context";
import useMultiSearch from "@/hooks/useMultiSearch";
import { useContext } from "react";
import MovieCard from "./MovieCard";
import TVShowCard from "./TVShowCard";
import { TVShowResult } from "@/hooks/useTVShowList";

const SearchList = () => {

    const {searchData, searchText} = useContext(SearchResultContext);
    useMultiSearch(searchText);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
       {searchData?.map((data: TVShowResult) => {
        return (
            <div key={data.id}> 
            {data.media_type === "movie" ? (
                <MovieCard movieResults={data}/>
            ) : (
                <TVShowCard TVResults={data}/>
            )}
            </div>
        )
       })}
    </div>
  )
}

export default SearchList;
