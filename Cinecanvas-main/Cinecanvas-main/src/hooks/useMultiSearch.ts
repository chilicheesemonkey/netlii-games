//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { SearchResultContext } from "@/context/searchResult.context";
import apiClient from "@/services/api-client"
import { useContext, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useMultiSearch = (input : string) => {
    const {setSearchData} = useContext(SearchResultContext);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchSearch = async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const res = await apiClient.get("/search/multi", {
            params: {
                query: input,
            },
        });
        setSearchData(res.data.results);

    };

    useEffect(() => {
        fetchSearch();
    });
}; 

export default useMultiSearch;