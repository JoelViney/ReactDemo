
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useDebounce from '../hooks/useDebounce';

import { Button, Container, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Form, FormControl } from "react-bootstrap";

const propTypes = {
	onCriteria: PropTypes.func.isRequired,
};

// Contains the Navbar with a Home & Search bar
const Header = ({ onCriteria }) => {
	const [criteria, setCriteria] = useState(''); // Lets start with something on the screen
	const debouncedCriteria = useDebounce(criteria, 1000);

	const handleHome = (e) => {
		console.log(`handleHome: ${criteria}`);
		setCriteria('');
		onCriteria('');
	}

	const handleSubmit = (e) => {
		console.log(`handleSubmit: ${criteria}`);
		e.preventDefault();
		onCriteria(criteria);
	}

	useEffect(() => {
		if (debouncedCriteria) {
			console.log(`debounce: ${debouncedCriteria}`);
			onCriteria(debouncedCriteria);
		} 
	}, [debouncedCriteria, onCriteria]); // Only call effect if debounced search term changes
	

	return (
		<header data-testid="header">
			<Navbar expand="md" bg="dark" variant="dark" fixed="top">
				<Container fluid>
					<Navbar.Brand href="/" className="py-0 cursor-pointer" onClick={handleHome}>
						{/* Borrowed logo for demo purposes :) */}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443 148" className="logo">
							<title>logo_red</title>
							<path className="cls-1" d="M50.22,98.85h.4Q58,51,65.5,4.5H96l-.26,127.59q-10.5,1-21,2.06l.18-93.27h-.4q-7.55,46.88-15.09,95-10.2,1.2-20.38,2.54-7.83-46.16-15.7-93.77H23l-.07,96Q13.4,142,4,143.5V4.5H34.43Q42.34,52.41,50.22,98.85Z"></path>
							<path className="cls-1" d="M131.81,87.94c-9.22-27.41-18.44-55.16-27.64-83.44h23.15q8.14,28.35,16.3,56.24H144q8.25-28.32,16.48-56.23h21.28c-9.29,27.3-18.61,54.77-27.93,82.61q0,20.47-.06,40.94-11,.53-22,1.25Z"></path>
							<path className="cls-1" d="M212,58.89h28V76.45q-14-.11-28-.06v50q-11,.07-22.07.32,0-61.13.09-122.27h58V22q-18-.05-36,0Q212,40.47,212,58.89Z"></path>
							<path className="cls-1" d="M258,4.5h22L280.14,110q18,.66,36.06,1.72,0,9,0,18-29-2-58.13-2.77Q258,65.71,258,4.5Z"></path>
							<path className="cls-1" d="M326,4.5h22l.26,127.76q-11-1-22-1.85Z"></path>
							<path className="cls-1" d="M436.45,4.5Q425,38.2,413.68,70.26,425.9,105.89,438,143.5q-11.44-1.81-22.91-3.43Q406.31,112,397.45,85h-.4q-8.88,25.65-17.76,50.52-10.21-1.17-20.42-2.19,12.14-31.9,24.28-64.94-11.46-32.58-23-63.85h22.7q8.15,24.11,16.27,49h.39q8.26-24.09,16.55-49Z"></path>
						</svg>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbarScroll" />

					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll>
						</Nav>
						<Form className="d-flex" onSubmit={handleSubmit}>
							<InputGroup>
								<FormControl data-testid="criteria-input" style={{ width: '280px' }}
									placeholder="search movies"
									aria-label="search"
									aria-describedby="search"
									value={criteria}									
          							onChange={(e) => setCriteria(e.target.value)}
								/>
								<Button data-testid="search-button" type="submit" variant="outline-secondary" id="button-search">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search pb-1" viewBox="0 0 16 16">
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
									</svg>
								</Button>
							</InputGroup>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

Header.propTypes = propTypes;
export default Header;
