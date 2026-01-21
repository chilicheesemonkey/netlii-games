//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import useTrendingList from "@/hooks/useTrendingList"
import { TVShowResult } from "@/hooks/useTVShowList";
import TVShowCard from "../TVShowCard";

const TrendingTVShowList = () => {
    const {trendingData} = useTrendingList("tv");

    return (
        <div className="p-3 mb-4">
            <div
            className="flex items-center cursor-pointer"
            >
                <h1 className="text-4xl font-semibold p-5 py-8">Trending TV Shows</h1>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
                {trendingData?.slice(0,15).map((tvshow: TVShowResult) => (
                    <div key={tvshow.id}>
                        <TVShowCard TVResults={tvshow}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingTVShowList;