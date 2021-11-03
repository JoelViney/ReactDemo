import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../components/Header';

const handleCriteria = (criteria) => {
    console.log(`handleCriteria: ${criteria}`);
};

test('criteria bubbles up', () => {
	render(<Header onCritera={handleCriteria} />);
	const inputElement = screen.queryByTestId('criteria');
    
    fireEvent.change(inputElement, {target: {value: 'star wars'}});
    expect(input.value).toBe('star wars');
});