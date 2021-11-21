import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoveContext } from '../../contexts/LoveContext';

const Header = () => {
    const { count } = useContext(LoveContext);
    let style = {
        textAlign: "left",
    }
    let removeUnderline = {
        textDecoration: "none",

    }
    let active = {
        textDecoration: "none",
        color: "white",
        backgroundColor: "lightblue",
        borderRadius: "15px",
    }

    const path = window.location.pathname;
    return (
        <div>
            <Navbar bg="dark" expand="lg" style={{ fontWeight: "bold", color: "white" }} className="d-flex">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={style} className="mx-3">
                        <Link style={removeUnderline} to="/">HOME</Link>
                        <Nav className="ms-auto">
                            <Link style={path === "/my-books" ? active : removeUnderline} to="/my-books"><Nav>MY BOOKS</Nav>
                            </Link>

                            <Link style={path === "/love" ? active : removeUnderline} to="/love">LOVED
                                <Badge style={{ fontSize: ".5em" }} className="mx-1" pill bg="danger">{count}
                                </Badge>
                            </Link>

                            <Link style={path === "/add-new-book" ? active : removeUnderline} to="/add-new-book"><Nav>ADD BOOK</Nav>
                            </Link>
                            <Link style={removeUnderline} to="/login"> <Nav>LOGOUT</Nav>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
