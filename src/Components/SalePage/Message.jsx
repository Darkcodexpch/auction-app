import { Container, Row, Col, Table} from "react-bootstrap"
import { db } from "../../FirebaseConfig/FirebaseConfig"
import {useEffect,useState} from 'react'
export default function Message() {
  const Data = JSON.parse(localStorage.getItem('logindata'));
  // console.log("Data",Data)
  const [messageDetails,setMessageDetails]  = useState('');
  useEffect(() => {
    db.ref("messages").on('value', (snapshot) => {
        let newdata = [];
        snapshot.forEach(data => {
            newdata.push({ data: data.val() })

        })
        var newArray = newdata.filter(function (el) {
          return el.data.salerid === Data[0].id
      }
      );
        newdata && setMessageDetails(newdata)
    })

}, [])

// console.log("messageDetails",messageDetails)
  return (
    <Container>
      <Row>
        <Col lg={7} md={7} className='mx-auto'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Buyer Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messageDetails && messageDetails.map((v,k)=>{
                return<tr key={k}>
                <td>{k+1}</td>
                <td>{v.data.buyername}</td>
                <td>{v.data.buyeremail}</td>
                <td><small>Pick email and interact with your buyer</small></td>
              </tr>
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
