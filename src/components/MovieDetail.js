import { useEffect } from 'react';
import { useParams } from "react-router-dom";

const MovieDetail = () => {
	const { id } = useParams();

	useEffect(() => {
		console.log(`Loading Movie ID: ${id}`);
	}, [id]); // Only run on the first render

	return (
		<div className="text-white h1">Movie details {id}</div>
	);
}

export default MovieDetail;