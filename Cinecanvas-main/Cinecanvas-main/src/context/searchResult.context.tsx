import { useState } from "react";
import { createContext } from "react";

export const SearchResultContext = createContext({});

export const SearchProvider = ({children}: {children: React.ReactNode}) => {
    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState();

    const value = {searchData, searchText, setSearchData, setSearchText};

    return(
        <SearchResultContext.Provider value={value}>
            {children}
        </SearchResultContext.Provider>
    )
}