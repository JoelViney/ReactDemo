import { render, screen } from '@testing-library/react';
import LoadingDetail from '../components/LoadingDetail';

test('shows spinner on loading', () => {
	render(<LoadingDetail loading={true} />);
	const divElement = screen.queryByTestId('spinner');

	expect(divElement).toBeInTheDocument();
	expect(divElement).toHaveTextContent('Loading...');
});

test('hides spinner when not loading', () => {
	render(<LoadingDetail loading={false} />);
	const divElement = screen.queryByTestId('spinner');
	
	expect(divElement).toBeNull();
});
