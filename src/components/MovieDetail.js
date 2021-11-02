
import { useParams } from "react-router-dom";

const MovieDetail = () => {
	const { id } = useParams();

	return (
		<div className="text-white h1">Movie details {id}</div>
	);
}

export default MovieDetail;