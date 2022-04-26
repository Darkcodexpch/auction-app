import { Container, Row, Col} from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
// import './Sale.css'
import { Outlet, NavLink } from 'react-router-dom'
export default function Buy() {
  return (
    <>
    <Container>
        <Navbar/>
            <Row className="mt-3 buyrow">
                <Col md={4} sm={6} className="left-box">
                    <ul>
                        <NavLink to="/Buy"><li className="navli">MyBids</li></NavLink>
                        <NavLink to="/Buy/Message"><li className="navli">Your Purchased Items</li></NavLink>
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