import { Container, Row, Col, Card,Form,Button } from "react-bootstrap"
import './Items.css'
export default function Items() {
  return (
    <div className="auction">
        <Container>
         <Row className="mt-3">
             <Col md={7} className="mx-auto text-center mb-5">
                 <span style={{color:"orange"}}>AUCTIONS</span>
                 <h2>Current Auctions</h2>
             </Col>
         </Row>
         <Row>
             <Col md={4} lg={4}>
                 <div className="item">
                     <div className="item-head">
                        <strong className="price">$95</strong>
                        <img src="https://preview.colorlib.com/theme/auction/images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp" className="img-fluid" height="270" width="270" alt="itemImage"/>
                     </div>
                     <div>
                         <h3>Pinky Shoes</h3>
                         <div className="d-flex justify-content-between mb-2">
                             <span>Shoes</span>
                             <span className="bit">4bids</span>
                         </div>
                         <button className="btn-bit">Submit a Bit</button>
                     </div>

                 </div>
             </Col>
             <Col md={4} lg={4}>
                 <div className="item">
                     <div className="item-head">
                        <strong className="price">$95</strong>
                        <img src="https://preview.colorlib.com/theme/auction/images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp" className="img-fluid" height="270" width="270" alt="itemImage"/>
                     </div>
                     <div>
                         <h3>Pinky Shoes</h3>
                         <div className="d-flex justify-content-between mb-2">
                             <span>Shoes</span>
                             <span className="bit">4bids</span>
                         </div>
                         <button className="btn-bit">Submit a Bit</button>
                     </div>

                 </div>
             </Col>
             <Col md={4} lg={4}>
                 <div className="item">
                     <div className="item-head">
                        <strong className="price">$95</strong>
                        <img src="https://preview.colorlib.com/theme/auction/images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp" className="img-fluid" height="270" width="270" alt="itemImage"/>
                     </div>
                     <div>
                         <h3>Pinky Shoes</h3>
                         <div className="d-flex justify-content-between mb-2">
                             <span>Shoes</span>
                             <span className="bit">4bids</span>
                         </div>
                         <button className="btn-bit">Submit a Bit</button>
                     </div>

                 </div>
             </Col>
        </Row>   
        </Container>
    </div>
  )
}
