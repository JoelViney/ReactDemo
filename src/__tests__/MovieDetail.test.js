import { act, render, screen } from '@testing-library/react';
import ReactRouter from 'react-router'

import MovieDetail from '../components/MovieDetail';


test('movie page loads', () => {
	// Arrange
	jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 'tt0091203' });

	// Act
	render(<MovieDetail />);
	
	// Assert
	const divElement = screen.queryByTestId('movie-container');
	expect(divElement).toBeInTheDocument();
});

// TODO
test('movie is loaded', () => {
	// Arrange
	jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 'tt0091203' });

	// Act
	
	// Assert
});