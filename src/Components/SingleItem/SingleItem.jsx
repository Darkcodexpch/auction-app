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
    // console.log("itemsData",itemsData && itemsData[0].data.imgg)
    // console.log("itemsData1",itemsData)
    const [bidAmount, setBidAmount] = useState('')
    const addBitHandler = () => {
        let price = itemsData && itemsData[0].data.price
        if (bidAmount < price) {
            alert("Please Bid Greather Than Current Bid Amount")
            setBidAmount('')
        }
        else if (Data[0].opt == 1) {
            alert("only buyer can bid")
            setBidAmount('')
        }
        else {
            let bidData = {
                itemid: id,
                bidderid: Data[0].id,
                bidderemail: Data[0].email,
                biddername: Data[0].name,
                bidAmount: parseInt(bidAmount),
                itemimage: itemsData[0].data.imgg,
                itemname: itemsData[0].data.name,
                itemdescription: itemsData[0].data.decription

            }
            db.ref('/').child('bids').push(bidData)
            setBidAmount('')
            alert("Bid Add Successfully")
        }
    }

    // bidderDAta
    const [bidderData, setbidderData] = useState('');
    const [maxval, setMaxval] = useState('')
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

    // console.log("bidderData", bidderData)    
    // datework
    const Currenttime = moment().format("HH:mm:ss a");
    // console.log("Currenttime",Currenttime);
    const EndTime = moment(itemsData && itemsData[0].data.biddingendtime).format("HH:mm:ss a");
    let d = moment.duration(moment(EndTime, "HH:mm:ss a").diff(moment(Currenttime, "HH:mm:ss a")));


    // messageSaler
    const [messagesaler, setMessageSaler] = useState('')
    let messageSalerHandler = () => {
        if (messagesaler === '') {
            alert('Please type message First')
        }
        else {
            let messageSalerData = {
                buyermessage: messagesaler,
                buyerid: Data[0].id,
                buyername: Data[0].name,
                buyeremail: Data[0].email,
                salerid: itemsData[0].data.salerid,
                salername: itemsData[0].data.salername,
                itemuniqueid: itemsData[0].data.itemuniqueid


            }
            db.ref('/').child('messages').push(messageSalerData)
            setMessageSaler('')
            alert("Message sent Successfully")
        }
    }

    // see highest bid person
    const max = bidderData && bidderData.reduce(function (prev, current) {
        return (prev.bidAmount > current.bidAmount) ? prev : current
    }) //returns object
    

    const highestBid = (Currenttime, EndTime) => {
        if (EndTime < Currenttime && bidderData.length >= 1) {
            let maxData = {
                bidamount: max?.data?.bidAmount,
                bidderemail: max.data.bidderemail,
                bidderid: max.data.bidderid,
                biddername: max.data.biddername,
                itemdescription: max.data.itemdescription,
                itemid: max.data.itemid,
                itemimage: max.data.itemimage,
                itemname: max.data.itemname
    
            }
            db.ref('/').child('purchaseditems').push(maxData)
            console.log("im running")
            // console.log("max",max)
        }
        else {
            console.log("Not Working")
        }

    }
    
    const [purchaseItem, setPurchaseitem] = useState('')
    useEffect(() => {
        db.ref("purchaseditems").on('value', (snapshot) => {
            let newdata = [];
            // let maxdata =[];
            snapshot.forEach(data => {
                newdata.push({ data: data.val() })

            })
            newdata && setPurchaseitem(newdata)
        })

    }, [])
    useEffect(() => {
        if(purchaseItem.length === 0 || purchaseItem[0].data.itemid !== id || EndTime < Currenttime){
            highestBid(Currenttime, EndTime);
            console.log("Added")
        }
        else{
            console.log("Already Add")
        }
        
    }, [EndTime])


    // console.log("purchaseItem", purchaseItem[0].data.itemid)

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
                                    <div className="saler">
                                        <input type="text" placeholder="Enter Your Message" className="p-2" value={messagesaler} onChange={(e) => { setMessageSaler(e.target.value) }} />
                                        <button className="btn-saler my-2 p-2" onClick={messageSalerHandler}>Message Saler</button>
                                    </div>

                                </div>
                            </Col></>
                    })}
                </Row>
                <Row>
                    <Col md={12} lg={12}>
                        <h2 className="bidderss">Number of Bids : {bidderData.length}</h2>
                        <ul>
                            {bidderData && bidderData.map((v, k) => {
                                return <li class="d-flex justify-content-between align-items-center bidders" key={k}>
                                    <div class="d-flex align-items-center">
                                        <span class="mr-2">{k + 1}</span>
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
