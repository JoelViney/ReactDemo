import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';


// Root component 
function App() {
    const [criteria, setCriteria] = useState(null);

	const handleCriteria = (criteria) => {
		console.log(`handleCriteria: ${criteria}`);
		setCriteria(criteria);
	};

	useEffect(() => {
		// eslint-disable-next-line default-case
		switch (Math.floor(Math.random() * 6)) {
			case 0: setCriteria('avengers'); break;
			case 1: setCriteria('star wars'); break;
			case 2: setCriteria('star trek'); break;
			case 3: setCriteria('harry potter'); break;
			case 4: setCriteria('the lord of the rings'); break;
			case 5: setCriteria('justice league'); break;
		}
	}, []); // Only call on page load

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
