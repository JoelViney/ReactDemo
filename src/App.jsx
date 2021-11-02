import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Error from './components/Error';

import axios from "axios";

const baseURL = "http://www.omdbapi.com/";

function App() {
    const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);

	useEffect(() => {
		handleSearch('harry potter'); // Load up some data by default
	}, []);

	const handleSearch = (criteria) => {
		console.log(`search: ${criteria}`);

        let url = `${baseURL}?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}&type=movie`;

		if (criteria) {
			url += `&s=${criteria}`;
		}

		if (criteria.length < 3) {
			setMovies([]);
			setError('Enter a search criteria with at least 3 characters...');
			return;
		}

		if (process.env.REACT_APP_OMDBAPI_API_KEY == null) {
			setError('Failed to load the API Key from the environment variables.');
			return;
		}

		setLoading(true);
		setError(null)
		console.log(`url: ${url}`);
		axios.get(url)
			.then(res => {
				console.log('res: ', res);
				if (res.data.Response === 'False') {
					setError(res.data.Error);
					setMovies([]);
				} else {
					setMovies(res.data.Search);
				}
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}

	return (
		<Router>
			<Header loading={loading} onSearch={handleSearch}></Header>
			<Switch>
				<Route exact path="/">
					<Movies movies={movies} loading={loading} error={error}></Movies>
				</Route>
				<Route path="/movie/:id">
					<Movie></Movie>
				</Route>
			</Switch>
			<Error error={error}></Error>
		</Router>
	); 
}

export default App;
