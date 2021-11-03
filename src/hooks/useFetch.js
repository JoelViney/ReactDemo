import { useState, useEffect } from 'react';

const baseURL = "https://www.omdbapi.com/";

// Custom hook
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		if (url == null) {
			return;
		}

		console.log(`Fetching data... ${url}`);

		setLoading(true);
		setError(null);
		setData(null);

		setTimeout(() => {
			fetch(`${baseURL}${url}`, { signal: abortCont.signal })
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
						setData([]);
					}
				})
				.catch(err => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					} else {
						setLoading(false);
						setData([]);
						setError(err.message);
					}
				});
		}, 1000);

		// abort the fetch
		return () => abortCont.abort();
	}, [url]);

	return { data, isPending: loading, error };
};

export default useFetch;