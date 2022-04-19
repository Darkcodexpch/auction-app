import { Container, Row, Col, Form } from "react-bootstrap"

export default function AddItem() {
    return (
        <Container>
            <Row>
                <Col md={7} className="mx-auto">
                    <div className="itemform">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Add Item Name</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Add Item Price</Form.Label>
                            <Form.Control type="text" placeholder="$0.00" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add item Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <button className="btn">Add Item</button>
                            </Form.Group>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
