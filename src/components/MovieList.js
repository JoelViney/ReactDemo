import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Pagination } from 'react-bootstrap';

import useFetch from '../hooks/useFetch';
import usePagination from '../hooks/usePagination';
import ErrorDetail from './ErrorDetail';
import LoadingSpinner from './LoadingSpinner';


const propTypes = {
    criteria: PropTypes.string,
};


// Displays a list of movies
const MovieList = ({ criteria }) => {
    const [ page, setPage ] = useState(1);
    const [ url, setUrl ] = useState();
    const { data: movies, recordCount, loading, error } = useFetch(url);
    const { totalPages, pages } = usePagination(page, recordCount, 10);

	useEffect(() => {
		console.log(`search: ${page} ${criteria}`);
        if (criteria == null) {
            return;
        }
        setUrl(`&type=movie&page=${page}&s=${criteria}`);
	}, [criteria, page]);

	const handlePageClick = (newPage) => {
		console.log(`handlePageClick: ${newPage} ${criteria}`);
        if (page === newPage) {
            return;
        }

        setPage(newPage);
    }

    return (
        <div className="container" data-testid="movie-list-container">

            { error && <ErrorDetail error={error}></ErrorDetail> }
            { loading && <LoadingSpinner loading={loading}></LoadingSpinner> }			
            { movies &&
                <>
                    <div className="row" data-testid="movie-list">

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

                    <div className="row">
                        <div className="col">
                            <div className="d-flex gap-2 p-4 text-center justify-content-center">
                                <Pagination size="lg">
                                    <Pagination.First key="-2" disabled={page === 1} onClick={() => handlePageClick(1)} />
                                    <Pagination.Prev key="-1" disabled={page === 1} onClick={() => handlePageClick(page - 1)} />

                                    {pages.map((x, i) => {
                                        return <Pagination.Item key={i} active={x === page} onClick={() => handlePageClick(x)}>{x}</Pagination.Item>
                                    })}

                                    <Pagination.Next key="-3" disabled={page === totalPages} onClick={() => handlePageClick(page + 1)} />
                                    <Pagination.Last key="-4" disabled={page === totalPages} onClick={() => handlePageClick(totalPages)} />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
MovieList.propTypes = propTypes;
export default MovieList;