import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface MovieResult {
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

const useMovieList = (genres: number | null) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [movieLists, setMovieLists] = useState<MovieResult[]>();
    const fetchMovieList = async () => {
        try {
            const res = await apiClient.get("discover/movie", {
                params: {
                    with_genres: genres,
                },
            });
            setMovieLists(res.data.results)
            // console.log(res.data.results);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) { /* empty */ }
    };

    useEffect(() => {
        fetchMovieList();
    }, [genres]);

    return { movieLists };
};


export default useMovieList;