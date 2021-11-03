import { render, screen } from '@testing-library/react';
import ErrorDetail from '../components/ErrorDetail';

test('display error with message', () => {
	render(<ErrorDetail error='I fell over and I cant get up'/>);
	const divElement = screen.queryByTestId('error detail');
	expect(divElement).toBeInTheDocument();
	expect(divElement).toHaveTextContent('I fell over and I cant get up');
});

test('dont display error when null', () => {
	render(<ErrorDetail error={null}/>);
	const divElement = screen.queryByTestId('error detail');
	expect(divElement).toBeNull();
});