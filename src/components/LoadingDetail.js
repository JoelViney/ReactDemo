import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const propTypes = {
	loading: PropTypes.bool.isRequired,
};

// Simple loading spinner.
const LoadingDetail = ({ loading }) => {
	return (
		<div className="text-center fs-1">
			{loading &&
				<Spinner animation="border" variant="danger" role="Loading indicator">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			}
		</div>
	);
};

LoadingDetail.propTypes = propTypes;
export default LoadingDetail;