import { fireEvent, render, screen } from '@testing-library/react';

import Header from '../components/Header';


test('criteria bubbles up', () => {
    // Arange
    const onCriteriaMock = jest.fn();
    render(<Header onCriteria={onCriteriaMock}></Header>);
	const criteriaInput = screen.queryByTestId('criteria-input');
    const searchButton = screen.queryByTestId('search-button');

    // Act
    fireEvent.change(criteriaInput, { target: { value: 'star wars' } });
    fireEvent.click(searchButton); // Fast-track this before the debounce

    // Assert
    // console.log('mock result:', onCriteriaMock.mock.calls);
    expect(criteriaInput.value).toEqual('star wars');
    expect(onCriteriaMock.mock.calls.length).toBe(1);
    expect(onCriteriaMock.mock.calls[0][0]).toEqual('star wars');
});