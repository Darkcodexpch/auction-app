import { Container, Row, Col } from "react-bootstrap"
import { db } from "../../FirebaseConfig/FirebaseConfig"
import { useEffect,useState } from "react"
import { NavLink } from "react-router-dom"
import './Items.css'
export default function Items() {
    const [itemsData, setitemsData] = useState()
    useEffect(() => {
        db.ref("items").on('value', (snapshot) => {
            let newdata =[];
            snapshot.forEach(data => {
                newdata.push({ data: data.val() })

            })
           newdata&&setitemsData(newdata)
        })
    }, [])
  return (
    <div className="auction">
        <Container>
         <Row className="mt-3">
             <Col md={7} className="mx-auto text-center mb-5">
                 <span style={{color:"orange"}}>AUCTIONS</span>
                 <h2>Current Auctions</h2>
             </Col>
         </Row>
         <Row className="d-flex justify-content-center">
             {itemsData && itemsData.map((v,k)=>{
                 return <Col md={4} lg={4} key={k} className="d-flex justify-content-center">
                 <div className="item">
                     <div className="item-head">
                        <strong className="price">{"$" + v.data.price}</strong>
                        <img src={v.data.imgg} className="img-fluid" height="250" width="250" alt="itemImage"/>
                     </div>
                     <div>
                         <h3>{v.data.name}</h3>
                         <div className="d-flex justify-content-between mb-2">
                             <span>{v.data.itemtype}</span>
                         </div>
                         <NavLink to={`item/${v.data.itemuniqueid}`}><button className="btn-bit">View Item</button></NavLink>
                         
                     </div>

                 </div>
             </Col> 

             })}
    
        </Row>   
        </Container>
    </div>
  )
}
