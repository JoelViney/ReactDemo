import PropTypes from 'prop-types'

const propTypes = {
	error: PropTypes.string,
};

const ErrorDetail = ({ error }) => {
	return (
		<div>
			{error && <div className="text-center text-white h4 pt-4">{error}</div>}
		</div>
	);
}

ErrorDetail.propTypes = propTypes;
export default ErrorDetail;