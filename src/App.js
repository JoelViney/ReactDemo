import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

import axios from "axios";

const baseURL = "http://www.omdbapi.com/?apikey=320f6ab2";

function App() {
	const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);


  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
	  // handleSearch('');    
  });

	const handleSearch = (criteria) => {
		console.log(`search: ${criteria}`);

		setLoading(true);
		
        let url = `${baseURL}&type=movie`;
		if (criteria === '') {
			url = `${url}&s=star.wars`;
		} else {
			url = `${url}&s=${criteria}`;
		}

		console.log(`url: ${url}`);
		axios.get(url)
			.then(res => {
				console.log('res: ', res);
				setMovies(res.data.Search);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}

	return (
		<div>
			<Header loading={loading} onSearch={handleSearch}></Header>
			<Movies movies={movies}></Movies>
		</div>
	);
}

export default App;
