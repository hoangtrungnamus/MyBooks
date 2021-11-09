import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoveContext } from '../Auth/LoveContext';

const Header = () => {
    const {count} = useContext(LoveContext);
    let style = {
        textAlign: "left",
    }
    let removeUnderline = {
        textDecoration: "none"
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg" style={{ fontWeight: "bold", color: "white" }} className="d-flex">
                <Container fluid>
                    <Link style={removeUnderline} exact to="/"><Navbar.Brand style={{ color: "white" }} className="mx-3">HOME</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={style} className="mx-3">
                        <Nav className="me-auto">
                            <Link style={removeUnderline} exact to="/my-books"><Nav style={{ color: "white" }}>MY BOOKS</Nav>
                            </Link>
                            <Link className="myMG" style={removeUnderline} exact to="/love">
                                <Nav style={{ color: "white" }}>LOVED
                                    <Badge pill className="mx-1" bg="danger">{count}
                                    </Badge></Nav>
                            </Link>
                            <Link className="myMG" style={removeUnderline} exact to="/add-new-book"><Nav style={{ color: "white" }}>ADD BOOK</Nav>
                            </Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Link style={removeUnderline} exact to="/login"> <Nav style={{ color: "white" }}>LOGOUT</Nav>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
