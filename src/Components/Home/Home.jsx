import { Container, Row, Col, Nav } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import './Home.css'
import Items from "../Items/Items"
export default function Home() {
    return (
        <>
            <div className="main-con">
                <Container>
                    <Navbar />
                    <Row>
                        <Col className="Head-Bottom" md={12}>
                            <h1>The Best Place to Buy and Sell</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                            <button className="btn mybtn">Explore</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Items />
        </>
    )
}
