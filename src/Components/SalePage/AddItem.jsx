import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

export default function AddItem() {
    // itemAddWork
    const [name, setName] = useState('')
    const [imgg, setimgg] = useState('')
    const [price, setPrice] = useState('')
    const [decription, setDescription] = useState('')
    const [itemtype,setItemType] = useState('')

    const itemHandler = (e) => {
        e.preventDefault()
        let addItem = {
            name,
            imgg,
            price,
            decription,
            itemtype
        }

        console.log(addItem)
    }
    return (
        <Container>
            <Row>
                <Col md={7} className="mx-auto">
                    <div className="itemform">
                        <Form onSubmit={itemHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Add Item Name</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Item Image Url</Form.Label>
                                <Form.Control type="text" placeholder="https://name@example.com" value={imgg} onChange={(e) => setimgg(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Add Item Price</Form.Label>
                                <Form.Control type="text" placeholder="$0.00" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Add item Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={decription} onChange={(e) => { setDescription(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className='my-3'>
                                        <Form.Select value={itemtype} onChange={(e) => setItemType(e.target.value)}>
                                            <option>Select Item Category</option>
                                            <option value="mobile">Mobile</option>
                                            <option value="laptop">Laptop</option>
                                        </Form.Select>
                                    </Form.Group>
                            <Form.Group className="mb-3">
                                <button className="btn">Add Item</button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
