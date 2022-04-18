import {Row, Col, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <Row>
    <Col md={12} className="head-Top">
        {/* <h3>Auction</h3>
<ul>
<li><Link to='/'>Home</Link></li>
<li><Link to='/buy'>Buy</Link></li>
<li><Link to='/sale'>Sale</Link></li>
</ul>
<p> <Link to='/signup'>Signup/Login</Link></p> */}
        <h3>Auction</h3>
        <Nav>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Buy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Sale</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Login/Signup</Nav.Link>
            </Nav.Item>
        </Nav>

    </Col>
</Row>
  )
}
