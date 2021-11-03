import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const propTypes = {
	loading: PropTypes.bool.isRequired,
};

// Simple loading spinner.
const LoadingDetail = ({ loading }) => {
	return (
		<div class="text-center">
			{loading &&
				<Spinner animation="grow" variant="info">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			}
		</div>
	);
};

LoadingDetail.propTypes = propTypes;
export default LoadingDetail;