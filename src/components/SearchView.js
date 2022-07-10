import { Link } from "react-router-dom";
import Hero from "./Hero";


import noimage from '../assets/images/noimage.png';

const MovieCard = ({ movie }) => {
    // const posterUrl = (movie.poster_path) ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://img.myloview.com/posters/no-movie-tape-icon-simple-thin-line-outline-vector-of-cinema-ban-prohibition-embargo-interdict-forbiddance-icons-for-ui-and-ux-website-or-mobile-application-700-207614476.jpg`
    
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


const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`;
    // console.log(searchResults.length);
    const resultsHtml = searchResults.length===0 ? <h2>No Search Results</h2> :searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <>
            <Hero text={title} />
            {
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </>
    )

}
export default SearchView;