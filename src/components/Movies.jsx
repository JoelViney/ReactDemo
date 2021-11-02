import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const propTypes = {
	movies: PropTypes.array.isRequired,
};

const Movies = ({ movies }) => {
	return (
        <div className="movie-container container pt-3">
            <div className="row">
                {movies.map((movie) => (
                <div key={movie.imdbID} className="movie-record col-12 col-sm-6 col-xl-4 col-xxl-3">
                    <div className="movie-poster">    
                        <Link to={{ pathname: 'movie/', search: "id=1"}}>
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
        </div>
	);
}

Movies.propTypes = propTypes;

export default Movies;