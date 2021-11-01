import PropTypes from 'prop-types'

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
                        
                        {movie.Poster !== 'N/A'
                            ? <a href={movie.Poster}>
                                <img src={movie.Poster} alt="Movie poster" />
                            </a>
                            :<a className="movie-text" href={movie.Poster}>
                                <span className="movie-poster">{movie.Title}</span>
                            </a>
                        }
                    </div>
                </div>
                ))}
            </div>
        </div>
	);
}

Movies.propTypes = propTypes;

export default Movies;