
import { useEffect, useState } from 'react'

// Hook
function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value); // State and setters for debounced value

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value); // Update debounced value after delay
		}, delay);

		// Cancel the timeout if value changes (also on delay change or unmount)
		// This is how we prevent debounced value from updating if value is changed ...
		// .. within the delay period. Timeout gets cleared and restarted.
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]); // Only re-call effect if value or delay changes
	
	return debouncedValue;
}

export default useDebounce;