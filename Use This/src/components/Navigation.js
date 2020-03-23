import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <div>
                {/* <Navbar bg="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className='d-inline p-2 bg-dark text-white' to='/'>Home</NavLink>
                            <NavLink className='d-inline p-2 bg-dark text-white' to='/tableau'>Bed Status</NavLink>
                            <NavLink className='d-inline p-2 bg-dark text-white' to='/chartjs'>Occupancy</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
                <Navbar bg="light" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Daily Status</Nav.Link>
                        <Nav.Link href="/chartjs">Summary Statistics</Nav.Link>
                        <Nav.Link href="/tableau">Unit Level Bed Status</Nav.Link>
                        
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
