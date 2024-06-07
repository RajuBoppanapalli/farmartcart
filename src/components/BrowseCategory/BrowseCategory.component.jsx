import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BrowseCategory/BrowseCategory.component.css";
import mart11 from "../../assets/images/mart11.png";
import mart13 from "../../assets/images/mart13.png";
import mart14 from "../../assets/images/mart14.png";
import mart3 from "../../assets/images/mart3.png";
import mart19 from "../../assets/images/mart19.png";
import mart6 from "../../assets/images/mart6.png";
import farm3 from "../../assets/images/farm3.png";
import farm2 from "../../assets/images/farm2.png";
import { ChevronLeft, ChevronRight, Link } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function BrowseCategory() {
    const sliderRef = useRef(null);
    const navigate=useNavigate();

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider changed to: ${index + 1}`);
        },
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 6, 
                },
            },
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 4, 
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3, 
                },
            },
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 2, 
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <div className="slick-head">
                <h4>Browse By Catagory</h4>
                <div className="slick-arrow">
                    <span className="m-2" onClick={() => sliderRef.current.slickPrev()}>
                         <ChevronLeft size={20} ></ChevronLeft>
                    </span>
                    <span onClick={() => sliderRef.current.slickNext()}>
                    <ChevronRight size={20} ></ChevronRight>
                    </span>
                </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
                <div className="slickk">
                    <div className="slick-img">
                       <img src={mart11} alt="mango"  onClick={()=>navigate(`/products`)}/>
                        <h6>Raw Meat</h6>
                    </div>
                </div>
                <div className="slickk">
                    <div className="slick-img">
                          <img src={mart13} alt="mango" onClick={()=>navigate(`/products`)} /> 
                        <h6>Wine & Alcohol</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img">
                    <img src={mart14} alt="mango" onClick={()=>navigate(`/products`)} />
                        <h6>Tea & Cofee</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img">
                   <img src={mart3} alt="mango"  onClick={()=>navigate(`/products`)}/>
                        <h6>Food Cupboard</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img">
                   <img src={mart19} alt="mango" onClick={()=>navigate(`/products`)} /> 
                        <h6>Forzen SeaFood</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img">
                    <img src={mart6} alt="mango" onClick={()=>navigate(`/products`)} />
                        <h6>Bread Sweet</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img"> 
                <img src={farm2} alt="mango"  onClick={()=>navigate(`/products`)}/>
                        <h6>Milk and Dairies</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img">
                    <img src={farm3} alt="mango"  onClick={()=>navigate(`/products`)}/>
                        <h6>Pet Food</h6>
                    </div>
                </div>
                <div class="slickk">
                    <div class="slick-img">
                   
               <img src={mart6} alt="mango" onClick={()=>navigate(`/products`)} />
                        <h6>Bread Sweet</h6>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default BrowseCategory;
