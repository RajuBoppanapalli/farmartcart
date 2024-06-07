import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import img from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import { Envelope, Funnel, GeoAlt, Grid3x3, Grid3x3Gap, Justify, List, Shop, Star, StarFill, StarHalf, Telephone } from "react-bootstrap-icons";
import "../Store/Store.component.css";

export function Store() {
    const [gridView, setGridView] = useState('4-col');
    const handle4ColView = () => {
        setGridView('4-col');
    };
    const handle2ColView = () => {
        setGridView('2-col');
    };
    const getColProps = () => {
        if (gridView === '4-col') {
            return { sm: 6, md: 4, lg: 3 };
        } else if (gridView === '2-col') {
            return { sm: 12, md: 6, lg: 6 };
        }
    };
    return (
        <Container fluid>
            <div className="breadcrumb">
                <span><a href="#">Homes</a> / <a href="#">Stores</a></span>
            </div>
            <h1 className='store-name'>Stores</h1>
            <div className="stores-head">
                <div><p>Total Stores Showing: 8</p></div>
                <div className="store-grid">
                    <Button variant="warning" className="me-3">
                        <Funnel  /> Filter
                    </Button>
                    <Grid3x3Gap  className="me-3"  onClick={handle4ColView}/>
                     <List onClick={handle2ColView}></List>
                </div>
            </div>
            <Row className="store">
              
                    <Col  {...getColProps()} className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322, <br />Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col  {...getColProps()} className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img2} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322, <br />Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col {...getColProps()}  className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img3} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322, <br />Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col{...getColProps()} className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img4} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322,<br /> Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col {...getColProps()} className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img5} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322, <br />Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col {...getColProps()}  className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img6} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322, <br />Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col {...getColProps()}  className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img7} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322,<br /> Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col {...getColProps()}  className="store-col">
                        <div className="store-item">
                        
                            <div className="image-container">
                                <Image src={img8} roundedCircle className="store-image" />
                            </div>
                         
                            <div className="store-info">
                                <h4>Go Pro</h4>
                                <div className="rating">
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarFill className="star" />
                                    <StarHalf className="star" />
                                    <Star className="star" /> (25)
                                </div>
                                <div className="location">
                                    <GeoAlt className="icon" />5035 Kemmer Rapid Suite 322, <br />Sawaynstad, Wisconsin, BZ
                                </div>
                                <div className="contact">
                                    <Telephone className="icon" /> +12609007046
                                </div>
                                <div className="email">
                                    <Envelope className="icon" /> mae06@example.com
                                </div>
                            </div>
                           
                            <div className="store-button">
                                <Button variant="warning" className="btn-visit-store">
                                    <Shop className="icon" /> Visit Store
                                </Button>
                            </div>
                        </div>
                    </Col>
               
            </Row>
        </Container>
    );
}
