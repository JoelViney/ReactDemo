import { render, screen } from '@testing-library/react';

import MovieList from '../components/MovieList';


test('movie list loads page', () => {
	// Arrange & Act
	render(<MovieList criteria={'highlander'} />);
	
	// Assert
	const divElement = screen.queryByTestId('movie-list-container');
	expect(divElement).toBeInTheDocument();
});

// TODO
test('movies load', () => {
	// Arrange

	// Act
		
	// Assert
});