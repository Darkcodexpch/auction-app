import { Container, Row, Col, Carousel } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { db } from "../../FirebaseConfig/FirebaseConfig"
import './SingleItem.css'
export default function SingleItem() {
    const { id } = useParams();
    // console.log("myid", id);
    const [itemsData, setitemsData] = useState()
    useEffect(() => {
        db.ref("items").on('value', (snapshot) => {
            let newdata = [];
            snapshot.forEach(data => {
                newdata.push({ data: data.val() })

            })
            var newArray = newdata.filter(function (el) {
                return el.data.itemuniqueid === id
            }
            );
            newArray && setitemsData(newArray)
        })
    }, [])
    // console.log(itemsData);
    return (
        <>
            <Container>
                <Navbar />
                <Row className="mt-5">
                    {itemsData && itemsData.map((v, k) => {
                        return <Col lg={8} md={8} key={k}>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={v.data.imgg}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={v.data.imgg}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={v.data.imgg}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div>
                                <p>{v.data.decription}</p>
                                <h2 className="bidderss">Bidders</h2>
                                <ul>
                                    <li class="d-flex justify-content-between align-items-center bidders">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-2">1.</span>
                                            <div class="d-flex align-items-center bidder-info px-4">
                                                <img src="https://preview.colorlib.com/theme/auction/images/person_2.jpg.webp" alt="Image" class="mr-2" height="80" />
                                                <span className="px-4">Chris Wilson</span>
                                            </div>
                                        </div>
                                        <span class="prices">$87</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    })}

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
