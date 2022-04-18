import { Container, Row, Col, Carousel } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import './SingleItem.css'
export default function SingleItem() {
    return (
        <>
            <Container>
                <Navbar />
                <Row className="mt-5">
                    <Col lg={8} md={8}>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://preview.colorlib.com/theme/auction/images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://preview.colorlib.com/theme/auction/images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://preview.colorlib.com/theme/auction/images/xproduct_1.jpg.pagespeed.ic.jv58llKnOW.webp"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus architecto adipisci voluptatem asperiores, quia qui, deserunt magni reprehenderit neque dolorum voluptates. Praesentium omnis eius nobis error ipsa, voluptatum possimus.</p>
                            <h2 className="bidderss">Bidders</h2>
                            <ul>
                                <li class="d-flex justify-content-between align-items-center bidders">
                                    <div class="d-flex align-items-center">
                                        <span class="mr-2">1.</span>
                                        <div class="d-flex align-items-center bidder-info px-4">
                                            <img src="https://preview.colorlib.com/theme/auction/images/person_2.jpg.webp" alt="Image" class="mr-2" height="80"/>
                                                <span className="px-4">Chris Wilson</span>
                                        </div>
                                    </div>
                                    <span class="prices">$87</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="box-1">
                            <span className="box-price">Price $95</span>
                            <span className="bits">Number of Bids:4</span>
                            <input type="text" placeholder="0.00$" />
                            <button className="btn">Submit Bit</button>
                        </div>
                        <div className="box-2">
                            <img src="https://preview.colorlib.com/theme/auction/images/xperson_3.jpg.pagespeed.ic.JjUOiYZeEX.webp" alt="owner-image" className="img-fluid" />
                            <h3>Collen Winston</h3>
                            <span>Owner</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repudiandae recusandae, incidunt possimus provident vel facilis!</p>


                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
