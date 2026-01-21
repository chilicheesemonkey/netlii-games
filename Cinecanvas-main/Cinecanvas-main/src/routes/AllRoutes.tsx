import MovieList from "@/components/MovieList"
import Player from "@/components/Player"
import SearchList from "@/components/SearchList"
import Trending from "@/components/Trending/Trending"
import TVPlayer from "@/components/TVPlayer"
import TVShowList from "@/components/TVShowList"
import { Route, Routes } from "react-router"

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Trending />} />
    <Route path="/Movies" element={<MovieList />}></Route>
    <Route path="/TVShows" element={<TVShowList />}></Route>
    <Route path="/search/:searchName" element={<SearchList/>}/>
    <Route path="/player/:playerId" element={<Player/>}/>
    <Route path="/tvplayer/:tvplayerId" element={<TVPlayer/>}/>
  </Routes>
  )
}

export default AllRoutes
