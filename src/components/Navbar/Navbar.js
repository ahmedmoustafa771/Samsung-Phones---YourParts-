import React from 'react';
import './Navbar.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import logo from '../../assets/logo.png';

const navbar = props => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
    <div className="navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img src={logo} class="navbar__logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Explore</Nav.Link>
                <Nav.Link href="/compare">Compare</Nav.Link>
                <NavDropdown title="Settings" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                        <FormControlLabel
                            control={
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Auto Generate"
                        />
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
};

export default navbar;