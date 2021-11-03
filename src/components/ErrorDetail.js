import PropTypes from 'prop-types'

const propTypes = {
	error: PropTypes.string,
};

const ErrorDetail = ({ error }) => {
	return (
		<>
			{error && 
				<div className="text-center text-white h4 pt-4" data-testid="error detail">{error}</div>
			}
		</>
	);
}

ErrorDetail.propTypes = propTypes;
export default ErrorDetail;