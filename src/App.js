import './App.css';
import Header from './components/Header';

function App() {
	const criteria = 'test'
	const loading = false;

	const handleSearch = (criteria) => {
		console.log.apply(`search: ${criteria}`);
		// setCriteria(criteria);
	}

	return (
		<div>
			<Header criteria={criteria} loading={loading} onSearch={handleSearch}></Header>
			<h3>criteria: { criteria }</h3>
		</div>
	);
}

export default App;
