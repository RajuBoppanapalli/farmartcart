import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../featurebrand/featureBrand.component.css";
import mart1 from "../../assets/images/mart1.png";
import mart10 from "../../assets/images/mart10.png";
import mart8 from "../../assets/images/mart8.png";
import mart5 from "../../assets/images/mart5.png";

import { CaretLeft, CaretRight, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export function FeatureBrands() {
    const navigate=useNavigate();
    const sliderRef = useRef(null);
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
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
                    slidesToShow: 2,
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
    return (
        <>
            <div className="slider-container">
                <div className="feature-head">
                    <h4> Featured Brands</h4>
                    <div className="feature-arrow">
                        <span className="m-2" onClick={() => sliderRef.current.slickPrev()}>
                        <ChevronLeft size={20} ></ChevronLeft>
                        </span>
                        <span onClick={() => sliderRef.current.slickNext()}>
                        <ChevronRight size={20} ></ChevronRight>
                        </span>
                    </div>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    <div className="feature-full">
                        <div className="feature-img">
                      <img src={mart1} alt=""  onClick={()=>navigate(`/products`)}/>
                           
                        </div>
                        <div className="feature-content" >
                            <p>FOODPOUND</p>
                            <h5>New Snacks Release</h5>
                        </div>
                    </div>
                    <div className="feature-full">
                        <div className="feature-img">
                   <img src={mart10} alt="" onClick={()=>navigate(`/products`)} />
                        </div>
                        <div className="feature-content">
                            <p>FARMART</p>
                            <h5>Fresh Meat sausag By 2 Get 1 !  </h5>
                        </div>
                    </div>
                    <div className="feature-full">
                        <div className="feature-img">
                      <img src={mart8} alt="" onClick={()=>navigate(`/products`)} />
                        </div>
                        <div className="feature-content">
                            <p>SODA BRAND</p>
                            <h5>Fresh Meat Sausag By 2 Get 1 !</h5>
                        </div>
                    </div>
                    <div className="feature-full">
                        <div className="feature-img">
             <img src={mart5} alt="" onClick={()=>navigate(`/products`)} />
                        </div>
                        <div className="feature-content">
                            <p>ITEA JSC</p>
                            <h5>Happy Tea 100% Organic from $29.9</h5>
                        </div>
                    </div>
                    <div className="feature-full">
                        <div className="feature-img">
            <img src={mart10} alt=""  onClick={()=>navigate(`/products`)}/>
                        </div>
                        <div className="feature-content">
                        <p>FARMART</p>
                            <h5>Fresh Meat sausag By 2 Get 1 !  </h5>
                        </div>
                    </div>
                    <div className="feature-full">
                        <div className="feature-img">
              <img src={mart8} alt="" onClick={()=>navigate(`/products`)} />
                        </div>
                        <div className="feature-content">
                        <p>SODA BRAND</p>
                            <h5>Fresh Meat Sausag By 2 Get 1 !</h5>
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    );
}