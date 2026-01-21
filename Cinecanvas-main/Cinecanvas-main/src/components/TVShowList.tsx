import useTVShowList from "@/hooks/useTVShowList";
import TVShowCard from "./TVShowCard";

const TVShowLists = () => {

  const { tvShows } = useTVShowList();
  console.log(tvShows);
  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">TV Shows</h1>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
      {tvShows?.map((tvShow) => (
        <div>
          <TVShowCard TVResults={tvShow}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TVShowLists
