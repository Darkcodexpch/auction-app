import { Container, Row, Col, Table} from "react-bootstrap"
import { db } from "../../FirebaseConfig/FirebaseConfig"
import {useEffect,useState} from 'react'

export default function Mybid() {
  const Data = JSON.parse(localStorage.getItem('logindata'));
   const[myBids,setMyBids] = useState('')
  useEffect(() => {
    db.ref("bids").on('value', (snapshot) => {
        let newdata = [];
        snapshot.forEach(data => {
            newdata.push({ data: data.val() })

        })
        var newArray = newdata.filter(function (el) {
          return el.data.bidderid === Data[0].id
      }
      );
      newArray && setMyBids(newArray)
    })

}, [])

// console.log("myBids",myBids)
  return (
    <Container>
    <Row>
      <Col lg={7} md={7} className='mx-auto'>
      <h3 className="text-muted text-center my-2">My Bids</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Unique Number</th>
              <th>Item Name</th>
              <th>Item Image</th>
              <th>Item details</th>  
               </tr>
          </thead>
          <tbody>
            {myBids && myBids.map((v,k)=>{
              return <tr key={k}>
              <td>{v.data.itemid}</td>
              <td>{v.data.itemname}</td>
              <td><img src={v.data.itemimage} alt="Itemimage" height="50px"/></td>
              <td>{v.data.itemdescription}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
  )
}
