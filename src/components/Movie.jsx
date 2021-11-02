
import { useParams } from "react-router-dom";

const Movie = () => {
	const id = useParams();

	return (
		<div className="text-white">Movie details {id}</div>
	);
}

export default Movie;