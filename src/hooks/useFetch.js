import { useState, useEffect } from 'react';


const baseURL = "https://www.omdbapi.com/";


// Calls the omdb api and returns the data
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const aborter = new AbortController();

		if (url == null) {
			return;
		}

		console.log(`Fetching data... ${url}`);

		setLoading(true);
		setError(null);
		setData(null);

		setTimeout(() => {
			const fullUrl = `${baseURL}?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}${url}`;
			fetch(fullUrl, { signal: aborter.signal })
				.then(res => {
					if (!res.ok) { // error coming back from server
						throw Error('Failed to connect to the server.');
					}
					return res.json();
				})
				.then(data => {
					setLoading(false);
					console.log('data: ', data);
					if (data.Response === 'True') {
						if (data.Search) {
							setData(data.Search);
						} else {
							setData(data);
						}
						setError(null);
					} else {
						setError(data.Error);
						setData(null);
					}
				})
				.catch(err => {
					if (err.name === 'AbortError') {
						console.log('Fetch aborted...');
					} else {
						setLoading(false);
						setData(null);
						setError(err.message);
					}
				});
		}, 1000);

		return () => aborter.abort(); // abort the fetch
	}, [url]);

	return { data, loading, error };
};
export default useFetch;