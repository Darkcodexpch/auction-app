import {Row, Col, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
export default function Navbar() {
let navigate = useNavigate()
let logoutHandler =()=>{
    localStorage.removeItem('logindata')
    navigate('/Signup')
}
  return (
    <Row>
    <Col md={12} className="head-Top">
        <h3>Auction</h3>
        <Nav>
            <Nav.Item> 
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item> 
                <Nav.Link><Link to='/buy'>buy</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to='/Sale'>Sale</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to='/Signup'>Login/Signup</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to='#' onClick={logoutHandler}>Logout</Link></Nav.Link>
            </Nav.Item>
        </Nav>

    </Col>
</Row>
  )
}
