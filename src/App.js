import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

// Root component 
function App() {
    const [criteria, setCriteria] = useState('');

	const handleCriteria = (criteria) => {
		console.log(`handleCriteria: ${criteria}`);
		setCriteria(criteria);
	};

	return (
		<Router>
			<Header onCriteria={handleCriteria}></Header>
			<div className="main-container">
				<Switch>
					<Route exact path="/">
						<MovieList criteria={criteria}></MovieList>
					</Route>
					<Route path="/movie/:id">
						<MovieDetail></MovieDetail>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
