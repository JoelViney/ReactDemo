import './App.css';
import { useState } from 'react'
import Header from './components/Header';

function App() {
	const [loading, setLoading] = useState(false)

	const handleSearch = (criteria) => {
		console.log(`search: ${criteria}`);
		setLoading(true);
	}

	return (
		<div>
			<Header loading={loading} 
				onSearch={handleSearch}></Header>
		</div>
	);
}

export default App;
