import './App.css';
import Header from './components/Header';

function App() {
    let searchText = "";

	function search() {
		console.log.apply('search2:');
	}

	return (
		<div>
			<Header searchText={searchText} onSearch={search()}></Header>
		</div>
	);
}

export default App;
