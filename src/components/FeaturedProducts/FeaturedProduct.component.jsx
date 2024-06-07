
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../TopsaverToday/TopSaver.component.css";
import "../FeaturedProducts/FeaturedProduct.component.css";
import Farm15 from "../../assets/images/farm15.jpg";
import Farm17 from "../../assets/images/farm17.jpg";
import Farm18 from "../../assets/images/farm18.jpg";
import Farm19 from "../../assets/images/farm19.jpg";
import Farm21 from "../../assets/images/farm21.jpg";
import Farm22 from "../../assets/images/farm22.jpg";
import Farm23 from "../../assets/images/farm23.jpg";
import Farm24 from "../../assets/images/farm24.jpg";
import Farm25 from "../../assets/images/farm25.jpg";
import Farm26 from "../../assets/images/farm26.jpg";
import Farm27 from "../../assets/images/farm27.jpg";
import Farm28 from "../../assets/images/farm28.jpg";
import Farm29 from "../../assets/images/farm29.jpg";
import { ArrowRepeat, ArrowsMove, CaretLeft, CaretRight, Cart3, CheckCircle, ChevronLeft, ChevronRight, Dash, Heart, HeartFill, Plus, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getFormartProduct } from "../../services/farmartproducts.service";
import axios from "axios";
import { getLocalStorageItem } from "../../services/storage/local.storage";

export function FeaturedProducts() {
    const [farmartProducts, setfarmartProducts] = useState([]);
    const [addwishlistmsg, setaddwishlistmsg] = useState(false);
    const [addcomparemsg, setaddcomparemsg] = useState(false);
    const [addcartmsg, setaddcartmsg] = useState(false);
   
    const sliderRef = useRef(null);
    const now = 70;
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider changed to: ${index + 1}`);
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const navigate = useNavigate();
    useEffect(() => {
        getFormartProduct().then((res) => {
            setfarmartProducts(res.data)

        })

    }, []);
    const [userData, setUserData] = useState(null);
    React.useEffect(() => {
        const data = getLocalStorageItem("userdata");
        setUserData(JSON.parse(data));
    }, [])
    const [qid,setqid]=useState(1);
    const handleaddtocart = (pid) => {
        console.log({
            productid: pid,
            customerid: userData[0]?.customerid
        });
        axios.post('http://localhost:4002/addtocart', {
            quantity:qid,
            productid: pid,
            customerid: userData[0]?.customerid
        }).then((res) => {
            setaddcartmsg(true)
            setTimeout(()=>{
                navigate('/shopingcart')
                window.location.reload()
            },2000)

        })
    }
    const handleaddtowishlist = (pid) => {
        console.log({
            productid:pid,
            customerid:userData[0]?.customerid
          });
        axios.post('http://localhost:4002/addtowishlist',{
          productid:pid,
          customerid:userData[0]?.customerid
          
        }).then((res)=>{
            setaddwishlistmsg(true)
            setTimeout(()=>{
                navigate('/wishlist')
                window.location.reload()
            },2000)
           
            
        })
    }
    const handleaddtocompare = (pid) => {
        console.log({
            productid:pid,
            customerid:userData[0]?.customerid
          });
        axios.post('http://localhost:4002/addtocompare',{
          productid:pid,
          customerid:userData[0]?.customerid
        }).then((res)=>{
            setaddcomparemsg(true)
            setTimeout(()=>{
                navigate('/compare')
                window.location.reload()
            },2000)
            
            
        })
    }
    function increasequantity(index) {
        let data = JSON.parse(JSON.stringify(farmartProducts));
        data[index].quantity = (data[index].quantity || 1) + 1;
        setfarmartProducts(data);
    }
    function decrementquantity(index) {

        if (farmartProducts[index].quantity > 1) {

            let data = JSON.parse(JSON.stringify(farmartProducts));
            data[index].quantity -= 1;
            setfarmartProducts(data);
        }
    }
    return (
        <>
            <div className="slider-container">
                <div className="featured-head">
                    <h4>Featured Products</h4>

                    <div className="featured-arrow">
                        <span className="m-2" onClick={() => sliderRef.current.slickPrev()}>
                            <ChevronLeft size={20} ></ChevronLeft>
                        </span>
                        <span onClick={() => sliderRef.current.slickNext()}>
                            <ChevronRight size={20} ></ChevronRight>
                        </span>
                    </div>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {
                        farmartProducts && farmartProducts.map((iteam, index) =>
                            <div className="Essential-full">
                                <div className="Essential-img" >
                                    {
                                        iteam.product_image && <img src={iteam.product_image} alt="" onClick={() => navigate(`/special/${iteam.product_id}`)} />
                                    }
                                    {
                                        !iteam.product_image && <img src={Farm18} alt="" />
                                    }
                                </div>
                                <div className="Essential-icons">
                                    <span><ArrowsMove></ArrowsMove></span>
                                    <br />

                                    {/* <form id={"wishlist" + iteam.product_id} method="post" action="http://localhost:4002/addtowishlist">
                                        <input type="hidden" value={iteam.product_id} name="productid" ></input>
                                    </form> */}
                                    {/* <span onClick={() => { document.getElementById("wishlist" + iteam.product_id).submit() ; setaddwishlistmsg(true)}}> <Heart></Heart></span> */}
                                    <span onClick={() => { handleaddtowishlist(iteam.product_id)}}> <Heart></Heart></span>
                                    <br />
                                    {/* <form id={"compare" + iteam.product_id} method="post" action="http://localhost:4002/addtocompare">
                                        <input type="hidden" value={iteam.product_id} name="productid" ></input>
                                    </form> */}
                                    {/* <span onClick={() => { document.getElementById("compare" + iteam.product_id).submit();setaddcomparemsg(true) }}> <ArrowRepeat></ArrowRepeat></span> */}
                                    <span onClick={() => { handleaddtocompare(iteam.product_id)}}> <ArrowRepeat></ArrowRepeat></span>
                                </div>
                                <span className="percent">{iteam.offer_percent}%</span>
                                <div className="Essential-disp ">
                                    <h6>{iteam.soldby}</h6>
                                    <h6 className="Essential-disp-dis" >{iteam.product_name}</h6>
                                </div>
                                <div className="Essential-sale">
                                    <span><StarFill className="start"></StarFill><StarFill className="start"></StarFill ><StarFill className="start"></StarFill ><StarHalf className="start"></StarHalf><Star className="start"></Star></span>
                                    <br />
                                    <span className="Essential-rate"><b>${iteam.newprice}</b> </span>&nbsp; <del>${iteam.oldprice}</del>
                                    <br />
                                </div>
                                <div className="Essential-cart">
                                    <div className="Essential-quantity">
                                        <span><Dash onClick={() => {
                                             decrementquantity(index) 
                                             setqid(iteam.quantity - 1);
                                             }}></Dash></span>
                                        <span className="m-2">{iteam.quantity}</span>
                                        <span><Plus onClick={() => {
                                             increasequantity(index)
                                             setqid(iteam.quantity + 1);
                                             }}></Plus></span>
                                    </div>

                                    <Button variant="warning" className="mt-2" onClick={() => { 
                                        handleaddtocart(iteam.product_id)
                                          
                                         }} ><Cart3 className="m-2 mt-0"></Cart3>Add To Cart</Button>
                                </div>
                            </div>

                        )
                    }
                </Slider>

            </div>
            {

addwishlistmsg && <label className="wishlis-pop"><HeartFill className="heart"></HeartFill> your product add to wishlist</label>
}
            {

addcomparemsg && <label className="wishlis-pop"><ArrowRepeat></ArrowRepeat> your product add to compare</label>
}
            {

addcartmsg && <label className="wishlis-pop"><CheckCircle></CheckCircle> your product added to Cart</label>
}
        </>
    );
}