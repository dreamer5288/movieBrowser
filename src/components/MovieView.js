import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import noimage from '../assets/images/noimage.png';

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if ((movieDetails.release_date).length===0) {
      // TODO: Deal with a possible missing image
      // const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const posterPath = (movieDetails.poster_path) ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : noimage 
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <h1 color="blue">Not Yet Released</h1>
              </div>
            </div>
          </div>
        </>
      );
    }else{
      console.log(movieDetails)
      const posterPath = (movieDetails.poster_path) ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : noimage 
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
     
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <h5>Tagline : {movieDetails.tagline}</h5>
                <h5>Rating : {movieDetails.vote_average}</h5>
                <h5>Release Date : {movieDetails.release_date}</h5>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;