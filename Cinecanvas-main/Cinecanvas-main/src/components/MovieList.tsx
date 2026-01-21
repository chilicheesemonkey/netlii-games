import useMovieList from "@/hooks/useMovies"
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { GenresContext } from "@/context/genres.context";

const MovieList = () => {
const {genres} = useContext(GenresContext);
  const { movieLists } = useMovieList(genres);
  console.log(movieLists);
  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">Movies</h1>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
      {movieLists?.map((movieList) => (
        <div>
          <MovieCard movieResults={movieList}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MovieList
