import { Component } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import "../styles/MTGNavbar.css";

class MTGNavbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<Navbar bg="dark" variant="dark" sticky="top" expand="lg">
					<Container>
						<Navbar.Brand href="/">PlayMTG</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/locations">
									All Locations
								</Nav.Link>
								<NavDropdown
									title="Explore"
									id="basic-nav-dropdown"
								>
									<NavDropdown.Item href="/location">
										Share a place to play
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Find a place to play
									</NavDropdown.Item>
									<NavDropdown.Item href="https://www.cardkingdom.com/">
										Buy and sell cards
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item
										href="#action/3.4"
										disabled="true"
									>
										Contact us!
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default MTGNavbar;
