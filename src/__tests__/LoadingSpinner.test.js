import { render, screen } from '@testing-library/react';

import LoadingSpinner from '../components/LoadingSpinner';

test('shows spinner on loading', () => {
	// Arrange & Act
	render(<LoadingSpinner loading={true} />);
	
	// Assert
	const divElement = screen.queryByTestId('spinner');
	expect(divElement).toBeInTheDocument();
	expect(divElement).toHaveTextContent('Loading...');
});

test('hides spinner when not loading', () => {
	// Arrange & Act
	render(<LoadingSpinner loading={false} />);
	
	// Assert
	const divElement = screen.queryByTestId('spinner');	
	expect(divElement).toBeNull();
});
