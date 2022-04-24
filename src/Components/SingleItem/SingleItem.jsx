import { Container, Row, Col, Carousel } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { db } from "../../FirebaseConfig/FirebaseConfig"
import './SingleItem.css'
import moment from 'moment';
export default function SingleItem() {
    const Data = JSON.parse(localStorage.getItem('logindata'));
    // console.log("storageData", Data)
    const { id } = useParams();
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
    // console.log("itemsData",itemsData && itemsData[0].data.biddingendtime)
    const [bidAmount, setBidAmount] = useState('')
    const addBitHandler = () => {
        let price = itemsData && parseInt(itemsData[0].data.price)
        console.log("Price", price)
        if (bidAmount < price) {
            alert("Please Bid Greather Than Current Bid Amount")
            setBidAmount('')
        }
        else {
            let bidData = {
                itemid: id,
                bidderid: Data[0].id,
                bidderemail: Data[0].email,
                biddername: Data[0].name,
                bidAmount

            }
            db.ref('/').child('bids').push(bidData)
            setBidAmount('')
            alert("Bid Add Successfully")
        }
    }

    // bidderDAta
    const [bidderData, setbidderData] = useState('');
    const [maxval,setMaxval] = useState('')
    useEffect(() => {
        db.ref("bids").on('value', (snapshot) => {
            let newdata = [];
            // let maxdata =[];
            snapshot.forEach(data => {
                newdata.push({ data: data.val() })

            })
            let newArray = newdata.filter(function (el) {
                return el.data.itemid === id
            }           
            );
            newArray && setbidderData(newArray)
        })
   
    }, [])

    // console.log("bidderData",bidderData)
    console.log("maxBidData",maxval)

    // datework
    const Currenttime = moment().format("HH:mm:ss a");
    const EndTime = moment(itemsData && itemsData[0].data.biddingendtime).format("HH:mm:ss a");
    let d = moment.duration(moment(EndTime, "HH:mm:ss a").diff(moment(Currenttime, "HH:mm:ss a")));
    return (
        <>
            <Container>
                <Navbar />
                <Row className="mt-5">
                    {itemsData && itemsData.map((v, k) => {
                        return <><Col lg={8} md={8} key={k}>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={v.data.imgg}
                                        alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={v.data.imgg}
                                        alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={v.data.imgg}
                                        alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                            <div>
                                <p className="des">{v.data.decription}</p>
                            </div>
                        </Col>
                            <Col lg={3} md={3} key={v.salerid}>
                                <div className="box-1">
                                    <span className="box-price">{`Price $ ${v.data.price}`}</span>
                                    <div className="bids-end my-3">
                                        {itemsData && Currenttime < EndTime ? <><span className="Square">{`${d.days()} Days `}</span><span className="Square">{`${d.hours()} Hours `}</span><span className="Square">{`${d.minutes()}min Left`}</span>
                                            <div className="my-2">
                                                <input type="text" placeholder="0.00$" value={bidAmount} onChange={(e) => { setBidAmount(e.target.value) }} />
                                                <button className="btn" onClick={addBitHandler}>Submit Bit</button>
                                            </div>
                                        </> : <p className="bidend">Bidding end Item Sold</p>}

                                    </div>
                                    {/* <input type="text" placeholder="0.00$" value={bidAmount} onChange={(e) => { setBidAmount(e.target.value) }} />
                                    <button className="btn" onClick={addBitHandler}>Submit Bit</button> */}
                                </div>
                                <div className="box-2">
                                    <h3>{v.data.salername}</h3>
                                    <span>Owner</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repudiandae recusandae, incidunt possimus provident vel facilis!</p>

                                </div>
                            </Col></>
                    })}
                </Row>
                <Row>
                    <Col md={12} lg={12}>
                        <h2 className="bidderss">Number of Bids : {bidderData.length}</h2>
                        <ul>
                            {bidderData && bidderData.map((v,k)=>{
                                return <li class="d-flex justify-content-between align-items-center bidders" key={k}>
                                <div class="d-flex align-items-center">
                                    <span class="mr-2">{k+1}</span>
                                    <div class="d-flex align-items-center bidder-info px-4">
                                        <span className="px-4">{v.data.biddername}</span>
                                    </div>
                                </div>
                                <span class="prices">{`$ ${v.data.bidAmount}`}</span>
                            </li>
                            })}
                            </ul>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
