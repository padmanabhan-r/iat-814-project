import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="secondary" variant="light">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className='d-block p-1 bg-secondary text-white' to='/'>Daily Status</NavLink>
                            <NavLink className='d-block p-1 bg-secondary text-white' to='/turnaround'>Turnaround</NavLink>
                            <NavLink className='d-block p-1 bg-secondary text-white' to='/summary'>Summary Statistics</NavLink>
                            <NavLink className='d-block p-1 bg-secondary text-white' to='/bedmap'>Layout</NavLink>
                            <NavLink className='d-block p-1 bg-secondary text-white' to='/potentialDT'>Potential Capacity</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Navbar bg="light" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Daily Status</Nav.Link>
                        <Nav.Link href="/chartjs">Summary Statistics</Nav.Link>
                        <Nav.Link href="/tableau">Unit Level Bed Status</Nav.Link>
                        
                    </Nav>
                </Navbar> */}
            </div>
        )
    }
}

export default Navigation
