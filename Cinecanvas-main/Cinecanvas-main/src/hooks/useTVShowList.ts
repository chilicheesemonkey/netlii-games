import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface TVShowResult {
    media_type: string;
    adult : boolean;
    id: number;
    original_language:  string;
    original_title: string;
    title: string;
    name?:string;
    backdrop_path: string;
    poster_path : string;
    overview : string;
}

const useTVShowList = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tvShows, setTVShows] = useState<TVShowResult[]>();
    const fetchTvShowList = async () => {
        try {
            const res = await apiClient.get("discover/tv");
            //console.log(res.data.results);
            setTVShows(res.data.results)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) { /* empty */ }
    };

    useEffect(() => {
        fetchTvShowList();
    }, []);

    return { tvShows };
};


export default useTVShowList;