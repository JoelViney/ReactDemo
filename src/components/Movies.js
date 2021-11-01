import PropTypes from 'prop-types'

const propTypes = {
	movies: PropTypes.array.isRequired,
};

const Movies = ({ movies }) => {
	return (
        <div className="container pt-3">
            <div className="d-flex flex-wrap">
                {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <div className="movie-poster-container">
                        <div className="movie-poster-frame">
                            <img className="movie-poster" src={movie.Poster} alt="movie poster"/>
                        </div>
                        <div>
                            <h6 className="movie-poster-text">{movie.Title}</h6>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
	);
}

Movies.propTypes = propTypes;

export default Movies;