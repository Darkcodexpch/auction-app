import { Container, Row, Col, Form } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
export default function Signup() {
    return (
        <>
            <Container>
                <Navbar />
                <Row className="log-div mt-3">
                    <Col md={6}>
                        <div className="login-form">
                            <h3>Login</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <button className="btn">Login</button>
                                </Form.Group>
                            </Form>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="Sinup-form">
                            <h3>Signup</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                    <Form.Group className='my-3'>
                                        <Form.Select aria-label="Default select example">
                                            <option>Who you are</option>
                                            <option value="1">Auctioneer</option>
                                            <option value="2">Bidder</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <button className="btn">Signup</button>
                                </Form.Group>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
