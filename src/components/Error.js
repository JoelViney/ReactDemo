import PropTypes from 'prop-types'

const propTypes = {
	error: PropTypes.string,
};

const Error = ({ error }) => {
	return (
		<div>
			{error && <div className="error text-center text-white h4 pt-4">{error}</div>}
		</div>
	);
}

Error.propTypes = propTypes;

export default Error;