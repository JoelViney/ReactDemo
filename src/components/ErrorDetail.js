import PropTypes from 'prop-types'

const propTypes = {
	error: PropTypes.string,
};

const ErrorDetail = ({ error }) => {
	return (
		<>
			{error && 
				<div data-testid="error-detail" className="text-center text-white h4 pt-4">{error}</div>
			}
		</>
	);
}

ErrorDetail.propTypes = propTypes;
export default ErrorDetail;