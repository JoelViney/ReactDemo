import { useState, useEffect } from 'react';

// Custom hook
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	useEffect(() => {
		const abortCont = new AbortController();

		setLoading(true);
		setError(null);
		
		sleep(500).then(() => {				
			setTimeout(() => {
				fetch(url, { signal: abortCont.signal })
					.then(res => {
						if (!res.ok) { // error coming back from server
							throw Error('Failed to connect to the server.');
						}
						return res.json();
					})
					.then(data => {
						setLoading(false);
						if (data.Response === 'True') {
							setData(data.Search);
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
		});

		// abort the fetch
		return () => abortCont.abort();
	}, [url]);

	return { data, isPending: loading, error };
};

export default useFetch;