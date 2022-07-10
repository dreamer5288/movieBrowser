import { Link } from "react-router-dom";
import Hero from "./Hero";
import noimage from '../assets/images/noimage.png';

// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1 

const MovieCard = ({ movie }) => {
    // const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const posterUrl = (movie.poster_path) ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noimage  
    
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}


const Home = ({topMovies}) => {

    const resultsHtml = topMovies.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            <Hero text="Top Rated Movies" />
            {/* <div className="container ">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tenetur, cupiditate dolor maiores
                        est at quos laboriosam harum doloribus cumque saepe architecto! Pariatur quam optio cum eaque?
                        Officiis, vero numquam.
                    </p>
                </div>

            </div> */}

            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </>
    )
}

export default Home;