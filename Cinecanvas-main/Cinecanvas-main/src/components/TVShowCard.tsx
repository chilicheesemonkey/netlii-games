import { Card, CardContent } from "./ui/card"
import { useNavigate } from "react-router"
import { TVShowResult } from "@/hooks/useTVShowList"

interface Props {
    TVResults : TVShowResult
}

const TVShowCard = ({TVResults} : Props) => {
    const navigate = useNavigate();
  return (
    <Card className="border-0 cursor-pointer" onClick={() => {
        navigate(`/tvplayer/${TVResults.id}`)
    }}>
        <CardContent>
            <div>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${TVResults.poster_path}`}
                    alt="poster"
                    className="hover:opacity-80 transition-all"
                />
                <h1 className="mt-3">{TVResults.title ? TVResults.title : TVResults.name}</h1>
            </div>
        </CardContent>
    </Card>
  )
}

export default TVShowCard
