import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import { Table } from 'react-bootstrap';

import useFetch from '../hooks/useFetch';
import ErrorDetail from './ErrorDetail';
import LoadingSpinner from './LoadingSpinner';


// Displays a single movie's details
const MovieDetail = () => {
	const [url, setUrl] = useState();
	const { error, loading, data: movie } = useFetch(url);
	const { id } = useParams();

	useEffect(() => {
		console.log(`Loading Movie ID: ${id}`);
		setUrl(`&plot=full&i=${id}`);
	}, [id]); // Only run on the first render

	return (
		<div data-testid="movie-container" className="container">
			{error && <ErrorDetail error={error}></ErrorDetail>}
			{loading && <LoadingSpinner loading={true}></LoadingSpinner>}
			{movie &&
				<div data-testid="movie-detail">
					<div className="row">
						<div className="col">
							<h1 className="movie-title">{movie.Title}</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-12 col-xl-4">
							<img src={movie.Poster} alt="Movie poster" />
						</div>
						<div className="col-12 col-xl-8">
							<Table striped bordered hover variant="dark" className="movie-table">
								<tbody>
									<tr>
										<td>Year</td>
										<td>{movie.Year}</td>
									</tr>
									<tr>
										<td>Genre</td>
										<td>{movie.Genre}</td>
									</tr>
									<tr>
										<td>Rated</td>
										<td>{movie.Rated}</td>
									</tr>
									<tr>
										<td>Director</td>
										<td>{movie.Director}</td>
									</tr>
									<tr>
										<td>Writer</td>
										<td>{movie.Writer}</td>
									</tr>
									<tr>
										<td>Actors</td>
										<td>{movie.Actors}</td>
									</tr>
									<tr>
										<td>Country</td>
										<td>{movie.Country}</td>
									</tr>
									<tr>
										<td>Language</td>
										<td>{movie.Language}</td>
									</tr>
									<tr>
										<td>Runtime</td>
										<td>{movie.Runtime}</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
					
					<div className="row">
						<div className="col">
							<div className="movie-plot">
								{movie.Plot}
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<Link to={`/`} className="clean-link">Back to search results</Link>
						</div>
					</div>
					
				</div>
			}
		</div>
	);
};
export default MovieDetail;