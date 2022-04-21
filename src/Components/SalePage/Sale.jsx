import { Container, Row, Col} from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import './Sale.css'
import { Outlet, NavLink } from 'react-router-dom'

export default function Sale() {
  return (
    <>
    <Container>
        <Navbar/>
            <Row className="mt-3 buyrow">
                <Col md={4} sm={6} className="left-box">
                    <ul>
                        <NavLink to="/Sale"><li className="navli">Dashboard</li></NavLink>
                        <NavLink to="/Sale/Additem"><li className="navli">Add Item</li></NavLink>
                        <NavLink to="/Sale/Message"><li className="navli">View Message</li></NavLink>
                    </ul>
                </Col>
                <Col md={8} sm={6} className="right-box">
                  <Outlet/>
                </Col>
            </Row>
    </Container>
    </>
  )
}
