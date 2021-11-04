import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    let style = {
        textAlign: "left",
    }
    let removeUnderline = {
        textDecoration: "none"
    }
    return (
        <div className="myBG">
            <Navbar bg="dark" expand="lg" style={{ fontWeight: "bold", color: "white" }} className="d-flex">
                <Container fluid>
                    <Link style={{ textDecoration: "none" }} to="/layout" exact><Navbar.Brand style={{ color: "white" }} className="mx-3">SÁCH CỦA TÔI</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={style} className="mx-3">
                        <Nav className="me-auto">
                            <Link style={removeUnderline} to="/layout/add-new-book" exact><Nav style={{ color: "white" }} href="#link">THÊM</Nav>
                            </Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Link style={removeUnderline} to="/login" exact> <Nav style={{ color: "white" }}>Logout</Nav>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
