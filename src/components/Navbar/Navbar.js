import React from 'react';
import './Navbar.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/logo.png';
import * as actions from '../../store/actions/index';

const navbar = props => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, checkedB: !state.checkedB });
      };
    props.onChangingSettingsState(state.checkedB);
    return (
    <div className="navbar">
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img src={logo} className="navbar__logo" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavLink to="/" className="navbar__link nav-link">Explore</NavLink>
                <NavLink to="/compare" className="navbar__link nav-link">Compare</NavLink>
                <NavDropdown title="Settings" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={state.checkedB}
                            onClick={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Auto Generate Devices"
                    />
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onChangingSettingsState: (checkedB) => dispatch(actions.changeSettingsState(checkedB)),
    };
};

export default connect(null, mapDispatchToProps)(navbar);