

import "../main/main.component.css"
import imgs from "../../assets/images/mart28.jpg"
import mart17 from "../../assets/images/mart17.jpg"
import mart8 from "../../assets/images/mart8.png"
import main3 from "../../assets/images/main3.jpg"
import main2 from "../../assets/images/main2.jpg"
import { Button, Carousel } from "react-bootstrap";

export function Main() {
    return (
        <>
            <div className="main-Carousel row">
                <div className="col main-Carousel-inner">
                    <Carousel className="main-Carousel1">

                        <Carousel.Item className="Carousel-main">
                            <img src={main3} alt="" />
                        </Carousel.Item>
                        <Carousel.Item className="Carousel-main">
                            <img src={main2} alt="" />

                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col main-Carousel-inner1 ">
                    <img src={mart17} alt="" />
                </div>
            </div>


        </>
    );
}