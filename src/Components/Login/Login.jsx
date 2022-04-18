import { Container, Row, Col, Card,Form,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Login.css'
function Login() {
    return (
        <Container>
            <Row className="rowdiv d-flex justify-content-center">
                <Col md={12}>
                    <Card  border="primary" style={{width: '40vw',height:'50vh' }}>
                        <Card.Header className="text-center text-muted fs-2">Login Form</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Form.Group className="my-2">
                                <Form.Text className="text-muted">
                                      <Link to="/Signup"> Don't Have an Account??  </Link>
                                    </Form.Text>
                                </Form.Group>   
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login