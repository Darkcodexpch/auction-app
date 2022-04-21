import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { db } from "../../FirebaseConfig/FirebaseConfig";
import { v4 as uuidv4 } from 'uuid';

export default function AddItem() {
 const Data =JSON.parse(localStorage.getItem('logindata'));
 console.log(Data)
 let uid = Data[0].id
 let salername = Data[0].name
    // itemAddWork
    const [name, setName] = useState('')
    const [imgg, setimgg] = useState('')
    const [price, setPrice] = useState('')
    const [decription, setDescription] = useState('')
    const [itemtype,setItemType] = useState('')
    const [time,setTime] = useState('')
    let itemuniqueid = uuidv4();
    const itemHandler = (e) => {
        e.preventDefault()
        if(name===""||imgg===""||price===""||decription===""||itemtype===""){
            alert("please Fill All fileds first")
        }
        else{
            let addItem = {
                salerid:uid,
                salername,
                itemuniqueid: itemuniqueid,
                biddingendtime:time,
                name,
                imgg,
                price,
                decription,
                itemtype,
            }
            db.ref('/').child('items').push(addItem)
    
            setName('');
            setimgg('');
            setPrice('');
            setDescription('');
            setItemType('')
            alert("Item Added succesfully")
        }
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
                                <Form.Label>Set Time And date for ending Bidding</Form.Label>
                                <Form.Control type="datetime-local" value={time} onChange={(e) => { setTime(e.target.value) }} />
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
                                            <option value="refrigerators">refrigerators</option>
                                            <option value="refrigerators">flat screens</option>
                                            <option value="LCDS">LCDS</option>
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
