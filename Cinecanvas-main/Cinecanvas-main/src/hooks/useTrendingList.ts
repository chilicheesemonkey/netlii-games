import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

const useTrendingList = (trending: string = "movie") => {
    const [trendingData, setTrendingData] = useState();

    const fetchTrending = async () => {
        try {
            const res = await apiClient.get(`trending/${trending}/day`);
            setTrendingData(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchTrending();
    }, []);
    return {trendingData, setTrendingData};
}

export default useTrendingList