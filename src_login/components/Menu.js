// External imports
import React, { useEffect } from "react";
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { NavLink, useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import LineIcon from 'react-lineicons'

// Local imports
// import { getLogoutSuccess } from '../actions/loginActions'
import { fetchData, getLogoutSuccess } from '../actions/appdata/addDataActions'

// Assets
import logo from '../assets/images/prime-logo.png'

const Menu = ({ dispatch }) => {
    let history = useHistory();
    useEffect(() => {
        fetchData();
    });

    const logoutSubmit = () => {
        dispatch(getLogoutSuccess())
        history.push('/')
        dispatch(fetchData())
    }
    return (
        <React.Fragment>
            <div className="menu">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/reports">
                            <Image src={logo} alt="Logo" className="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={NavLink} to="/dashboard" activeClassName={"active"} exact={true}>Dashboard</Nav.Link>
                                <Nav.Link as={NavLink} to="/reports">Reports</Nav.Link>
                                <Nav.Link as={NavLink} to="/task">Task</Nav.Link>
                                <Nav.Link as={NavLink} to="/client">Client</Nav.Link>
                                <Nav.Link as={NavLink} to="/templates">Templates</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Button variant="warning" className="ml-2" onClick={() => logoutSubmit()}><LineIcon name="lock-alt" /> Logout</Button>
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    login: state.user.user.login
})
  
export default connect(mapStateToProps)(Menu)