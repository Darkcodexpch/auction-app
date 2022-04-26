import { Container, Row, Col} from "react-bootstrap"
import { db } from "../../FirebaseConfig/FirebaseConfig"
import { useState,useEffect } from "react"
import Items from "../Items/Items"
export default function Dashboard() {
  const Data =JSON.parse(localStorage.getItem('logindata'));
  let uid = Data[0].id
  const [itemsData, setitemsData] = useState()
  useEffect(() => {
      db.ref("items").on('value', (snapshot) => {
          let newdata =[];
          snapshot.forEach(data => {
              newdata.push({ data: data.val() })

          })

         var newArray = newdata.filter(function (el) {
          return el.data.salerid === uid
        }
        );
        setitemsData(newArray)
      })
  }, [])

  return (
    <Container>
      <Row className="mt-2">
      {itemsData && itemsData.map((v,k)=>{
                 return <Col md={4} lg={4} key={k}>
                 <div className="item">
                     <div className="item-head">
                        <strong className="price">{"$" + v.data.price}</strong>
                        <img src={v.data.imgg} className="img-fluid" height="250" width="250" alt="itemImage"/>
                     </div>
                     <div>
                         <h3 className="itemsh3">{v.data.name}</h3>
                         <div className="d-flex justify-content-between mb-2">
                             <span>{v.data.itemtype}</span>
                             {/* <span className="bit">4bids</span> */}
                         </div>
                         {/* <button className="btn-bit">Submit a Bit</button> */}
                     </div>

                 </div>
             </Col> 

             })}
    
      </Row>
    </Container>
  )
}
