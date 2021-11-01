

const Movies = ({ movies }) => {

	return (
        <div>
            {movies.map((movie) => (
                <h3 key="movie.id">{movie.title}</h3>
            ))}

        </div>
	);
}

export default Movies;