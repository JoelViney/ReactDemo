import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';

import ErrorDetail from './ErrorDetail';
import LoadingDetail from './LoadingDetail';

const propTypes = {
    criteria: PropTypes.string.isRequired,
};

const baseURL = "http://www.omdbapi.com/";

const MovieList = ({ criteria }) => {	
    const [url, setUrl] = useState();
	const { error, loading, data: movies } = useFetch(url)

	useEffect(() => {
		console.log(`search: ${criteria}`);
		setUrl(`${baseURL}?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}&type=movie&s=${criteria}`);
	}, [criteria]);

    return (
        <div className="container pt-3">
            { error && <ErrorDetail error={error}></ErrorDetail> }
            { loading && <LoadingDetail loading={loading}></LoadingDetail> }
			
            { movies && 
                <div className="row">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className="movie-record col-12 col-sm-6 col-xl-4 col-xxl-3">
                            <div className="movie-poster">
                                <Link to={`/movie/${movie.imdbID}`}>
                                    {movie.Poster !== 'N/A'
                                        ?
                                        <div>
                                            <img src={movie.Poster} alt="Movie poster" />
                                            <div className="movie-hover-text">
                                                {movie.Title} ({movie.Year})
                                            </div>
                                        </div>
                                        :
                                        <div className="movie-text">
                                            <span>{movie.Title}</span>
                                            <div>({movie.Year})</div>
                                        </div>
                                    }
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

MovieList.propTypes = propTypes;
export default MovieList;