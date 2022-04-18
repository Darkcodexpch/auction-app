// import './Signup.css'
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
// import { Link } from 'react-router-dom'

// function Signup() {
//     return (
//         <Container>
//             <Row className="rowdiv d-flex justify-content-center">
//                 <Col md={12}>
//                     <Card border="primary" style={{ width: '40vw' }}>
//                         <Card.Header className="text-center text-muted fs-2">Signup Form</Card.Header>
//                         <Card.Body>
//                             <Form>
//                                 <Form.Group className="mb-3" controlId="formBasicName">
//                                     <Form.Label>Name</Form.Label>
//                                     <Form.Control type="text" placeholder="Enter Name" />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter email" />
//                                     <Form.Text className="text-muted">
//                                         We'll never share your email with anyone else.
//                                     </Form.Text>
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control type="password" placeholder="Password" />
//                                 </Form.Group>
//                                 <Form.Group className='mb-3'>
//                                 <Form.Select aria-label="Default select example">
//                                     <option>Who you are</option>
//                                     <option value="1">Auctioneer</option>
//                                     <option value="2">Bidder</option>
//                                 </Form.Select>
//                                 </Form.Group>
//                                 <Button variant="primary" type="submit">
//                                     Submit
//                                 </Button>
//                                 <Form.Group className="my-2">
//                                     <Form.Text className="text-muted">
//                                         <Link to='/'>Have an Account?? </Link>
//                                     </Form.Text>
//                                 </Form.Group>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Signup


import { Button } from "bootstrap"
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
