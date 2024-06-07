import { useEffect, useState } from "react";
import React from 'react';

import { Tab, Nav, ProgressBar } from 'react-bootstrap';
import { Button, Carousel } from "react-bootstrap";
import special1 from "../../assets/images/special1.jpg";
import special2 from "../../assets/images/special2.jpg";
import special3 from "../../assets/images/special3.jpg";
import special4 from "../../assets/images/special4.jpg";
import rocket from "../../assets/images/rocket.png"
import reload from "../../assets/images/reload.png"
import protect from "../../assets/images/protect.png"
import ven from "../../assets/images/ven.jpg"
import img1 from "../../assets/images/1.png"
import "../SpecialPrice/specialprice.component.css";
import { ArrowRepeat, Cart3, Check2Circle, Dash, Envelope, Facebook, GeoAlt, Heart, Linkedin, Plus, Star, StarFill, StarHalf, Telephone, Twitter, Youtube } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { RelatedProducts } from "../RelatedProducts/RelatedProducts.component";
import { Secure } from "../Secure/Secure.component";

export function SpecialPrice() {

    const [index, setIndex] = useState(0);
    const [activeKey, setActiveKey] = useState('home');
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [rating, setRating] = useState(0);
    const [productImage, setProductImage] = useState('');
    const [addReview, setAddReview] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetchProductDetails(id);
    }, [id]);

    const fetchProductDetails = (id) => {
        axios.get(`http://localhost:4002/getproduts/${id}`)
            .then(response => {
                const data = response.data[0];
                if (data) {
                    setProduct(data);
                    setLoading(false);
                } else {
                    console.error("No product data found for ID:", id);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
                setLoading(false);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>No product data available for this ID</div>;
    }
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleThumbnailClick = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    const handleRatingClick = (ratingValue) => {
        setRating(ratingValue);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProductImage(reader.result);
        };
        reader.readAsDataURL(file);
    };


    const saveData = async (data) => {
        const formData = new FormData();
        formData.append('rating', rating);
        formData.append('review', data.review);
        formData.append('productid', product.product_id);
        formData.append('image', productImage);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        try {
            const res = await axios.post('http://localhost:4002/add-review', formData, config);
            if (res.status === 200) {
                setAddReview(true);
                setTimeout(() => {
                    setAddReview(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };



    return (
        <>

            <div className="scpel-headbar">
                <div className="scpel-head">
                    <div><img src={product.product_image} alt="Thumbnail 1" /></div>
                    <div className="scpel-head-sub">
                        <div> <h5>{product.product_name}</h5></div>
                        <div className="scpel-head-inner">
                            <div><span>Discreption</span></div>
                            <div><span>Reviews(9)</span></div>
                        </div>
                    </div>
                </div>
                <div className="scpel-head1" >
                    <div className="scpel-head1-sub"><span style={{ color: "green" }}>${product.newprice}</span></div>
                    <div><Button variant="warning"><Cart3></Cart3>Add to cart</Button></div>
                    <div><Button variant="dark"> Buy Now</Button></div>
                </div>
            </div>
            <div className="spcl">
                <div className="breadcrumb">
                    <span><a href="#">Homes</a> / <a href="#">Product</a> / <a href="#">Wines & Alcohol Drinks</a> / <a href="#">Ready Meals</a> / <a href="#">Lunch & Veg pots</a> / <a href="#">smart watches</a></span>
                </div>

                <div className="carsl-maindiv">

                    <div>
                        <div className="carsl-side" onClick={() => handleThumbnailClick(0)}>
                            <img src={product.product_image} alt="Thumbnail 1" />
                        </div>
                        <div className="carsl-side" onClick={() => handleThumbnailClick(1)}>
                            <img src={product.product_image} alt="Thumbnail 2" />
                        </div>
                        <div className="carsl-side" onClick={() => handleThumbnailClick(2)}>
                            <img src={product.product_image} alt="Thumbnail 3" />
                        </div>
                        <div className="carsl-side" onClick={() => handleThumbnailClick(3)}>
                            <img src={product.product_image} alt="Thumbnail 4" />
                        </div>
                    </div>

                    <div className="carsl-div">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="carsl-main">
                            <Carousel.Item className="carsl-img">
                                <img src={product.product_image} alt="Image 1" />
                            </Carousel.Item>
                            <Carousel.Item className="carsl-img">
                                <img src={product.product_image} alt="Image 2" />
                            </Carousel.Item>
                            <Carousel.Item className="carsl-img">
                                <img src={product.product_image} alt="Image 3" />
                            </Carousel.Item>
                            <Carousel.Item className="carsl-img">
                                <img src={product.product_image} alt="Image 4" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="special-total">
                        <div className="special-content">
                            <p>{product.product_name}</p>
                            <label htmlFor="">Brand:</label> <span style={{ color: "rgb(9, 123, 216)", fontSize: "13" }}>{product.product_brand} &nbsp;</span> <span><StarFill className="start"></StarFill><StarFill className="start"></StarFill ><StarFill className="start"></StarFill ><StarHalf className="start"></StarHalf><Star className="start"></Star></span> <span>(10)</span>
                        </div>
                        <div className="special-price">
                            <h4>${product.newprice}</h4>
                            <label htmlFor="">Sold By :</label> <span style={{ color: "rgb(9, 123, 216)", fontSize: "13", fontWeight: "500" }}><b>{product.soldby}</b> </span>
                            <div>
                                <ul>
                                    <li>Unrestrained and portable active stereo speaker</li>
                                    <li>Free from the confines of wires and chords</li>
                                    <li>20 hours of portable capabilities</li>
                                    <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included </li>
                                    <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                </ul>
                            </div>
                            <div className="special-available">
                                <span >Availability : </span> <span style={{ color: "green", fontSize: "13" }}>{product.available} products available</span>
                            </div>

                            <div className="colors-div">
                                <span>colors : </span>
                                <div className="colors">
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                    <div className="red"></div>
                                </div>

                            </div>
                            <div className="colors-div">
                                <span>Size : </span>
                                <div className="colors">
                                    <div className="xl">XL</div>
                                    <div className="xl">XXL</div>

                                </div>

                            </div>
                            <div className="colors-div">
                                <span>Quantity : </span>
                                <div className="colors">
                                    <div className="wish-qan">
                                        <span><Dash></Dash></span>
                                        <span>1</span>
                                        <span><Plus></Plus></span>
                                    </div>
                                    <div>
                                        <Button variant="warning"><Cart3></Cart3> Add to Cart</Button>
                                    </div>
                                    <div>
                                        <Button variant="dark">Buy Now</Button>
                                    </div>
                                </div>

                            </div>
                            <div className="wish-heart">
                                <span><Heart></Heart> Wishlist</span> &nbsp; &nbsp; &nbsp;
                                <span><ArrowRepeat> </ArrowRepeat> compare</span>
                            </div>

                        </div>
                        <div>
                            <span>SKU : {product.sku}</span>
                        </div>
                    </div>
                    <div>
                        <div className="special-secure">
                            <div className="secure-inner col">
                                <div><img src={rocket} alt="" /></div>
                                <div className="secure-content">
                                    <h5>Free Shipping</h5>
                                    <p>For all Orders Over $200</p>
                                </div>
                            </div>

                            <div className="secure-inner col">
                                <div><img src={reload} alt="" /></div>
                                <div className="secure-content">
                                    <h5>1 & 1 Returns</h5>
                                    <p>Cancellation after 1 day</p>
                                </div>
                            </div>

                            <div className="secure-inner col">
                                <div><img src={protect} alt="" /></div>
                                <div className="secure-content">
                                    <h5>100% Secure Payment</h5>
                                    <p>Guarantee secure payments</p>
                                </div>
                            </div>
                        </div>

                        <div className="adress">
                            <h5>Hotline Order:</h5>
                            <p>Mon - Fri: 07AM - 06PM</p>
                            <h5>(+965) 7492-4277</h5>
                        </div>

                    </div>

                </div>

                <div className="special-one-product d-flex align-items-start">

                    <Nav variant="pills" className="flex-column me-3" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item className="spcl-side var">
                            <Nav.Link eventKey="home">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="spcl-side">
                            <Nav.Link eventKey="profile">Reviews (10)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="spcl-side" >
                            <Nav.Link eventKey="messages"  >Vender Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="spcl-side">
                            <Nav.Link eventKey="settings">Question & Answers</Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <Tab.Content activeKey={activeKey} className="flex-grow-1">
                        <Tab.Pane eventKey="home" className={activeKey === 'home' ? 'show active' : ''}>
                            <div>
                                <div style={{ color: "black" }}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat quam dolorem soluta neque sit vel officiis cumque suscipit accusantium voluptatibus pariatur molestiae maiores dolore, cum, odio ullam temporibus ipsum sequi, et quisquam voluptates vero obcaecati? Libero velit cupiditate optio magni consequatur cum. Nulla repudiandae eius, neque quod incidunt at.</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p><Dash></Dash> Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur unde nihil vero expedita corporis inventore, facere laudantium mollitia quia, natus pariatur ducimus obcaecati asperiores, voluptas beatae voluptate doloribus quis tenetur! Quis ut, totam repellendus ipsum nostrum vitae incidunt veritatis iste minus commodi sunt. Recusandae labore doloribus soluta fugiat dolor?</p>
                                </div>

                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="profile" className={activeKey === 'profile' ? 'show active' : ''}>
                            <div className="review-main">
                                <div className="review row">
                                    <div className="review-sub col">
                                        <div className="review-heading">
                                            <p style={{ color: "black" }}>Customer Review</p>
                                        </div>

                                        <div className="rating-container">
                                            <h4 style={{ color: "black" }}>29.0</h4>
                                            <span className="stars">
                                                <StarFill className="start" />
                                                <StarFill className="start" />
                                                <StarFill className="start" />
                                                <StarHalf className="start" />
                                                <Star className="start" />
                                            </span>
                                            <span style={{ color: "black" }}>(10)</span>
                                        </div>
                                        <div className="rating-star">
                                            <div className="star-rating">
                                                <span style={{ color: "black" }}>5 star</span>
                                                <ProgressBar now={20} className="bar mb-1" />
                                                <span style={{ color: "black" }}>20%</span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ color: "black" }}>4 star</span>
                                                <ProgressBar now={20} className="bar mb-1" />
                                                <span style={{ color: "black" }}>20%</span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ color: "black" }}>3 star</span>
                                                <ProgressBar now={20} className="bar mb-1" />
                                                <span style={{ color: "black" }}>20%</span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ color: "black" }}>2 star</span>
                                                <ProgressBar now={20} className="bar mb-1" />
                                                <span style={{ color: "black" }}>20%</span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ color: "black" }}>1 star</span>
                                                <ProgressBar now={20} className="bar mb-1" />
                                                <span style={{ color: "black" }}>20%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-form col">
                                        <div className="review-form-head">
                                            <h5 style={{ color: "black" }}>Add New Review</h5>
                                        </div>
                                        <div className="review-form-subhead">
                                            <p style={{ color: "black" }}>Your email address will not be published. Required fields are marked * *</p>

                                        </div>

                                        <div>
                                            <form onSubmit={handleSubmit(saveData)}>
                                                <span style={{ color: 'black' }}>Your rating: </span>
                                                <div className="rating-stars">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <StarFill
                                                            key={star}
                                                            className="star"
                                                            style={{ color: rating >= star ? 'gold' : 'gray', cursor: 'pointer' }}
                                                            onClick={() => handleRatingClick(star)}
                                                        />
                                                    ))}
                                                </div>
                                                <br />
                                                <label style={{ color: 'black' }}>Review: </label>
                                                <br />
                                                <input
                                                    type="text"
                                                    id="review-input"
                                                    className="review-input"
                                                    name="review"
                                                    {...register('review')}
                                                />
                                                <br />
                                                <br />
                                                <input
                                                    type="file"
                                                    style={{ color: 'black' }}
                                                    name="image"
                                                    {...register('image')}
                                                    onChange={handleImageChange}
                                                    required
                                                />
                                                <br />
                                                <br />
                                                <Button type="submit">Submit</Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="messages" className={activeKey === 'messages' ? 'show active' : ''}>
                            <div className="ven-cont">
                                <div className="vendar-info">
                                    <div className="vender-img"><img src={img1} alt="" /></div>
                                    <div className="vendar-disp">
                                        <h6 style={{ color: "white" }}>Global Store</h6>
                                        <div style={{ color: "gold" }}><StarFill style={{ color: "gold" }}></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill><StarFill></StarFill> <span style={{ color: "white" }}>(10)</span>

                                            <p style={{ color: "white" }}><GeoAlt></GeoAlt>8301 Sawayn Trail, South Reidborough, Kansas, NO</p>
                                            <p style={{ color: "white" }}><Telephone></Telephone> +18285268839</p>
                                            <p style={{ color: "white" }}><Envelope></Envelope> jessyca02@example.org</p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div className="social">
                                        <Button className="me-1"><Facebook></Facebook></Button>
                                        <Button className="me-1"><Twitter></Twitter></Button>
                                        <Button className="me-1"><Youtube></Youtube></Button>
                                        <Button className="me-1"><Linkedin></Linkedin></Button>
                                        <p style={{ color: "white" }}>Started from: Mar 28, 2024</p>
                                    </div>

                                </div>
                                <div className="ven-content">
                                    <p style={{ color: "black" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dignissimos architecto in dolores adipisci consequatur ad rem veritatis ex iure accusamus illum est eius nam ullam iste cupiditate sequi nihil quod expedita minima, iusto magnam. Inventore voluptates corporis, repudiandae enim, hic pariatur autem in vitae obcaecati quos, aperiam omnis harum!
                                    </p>
                                    <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque minima consequuntur illo vero quam, libero dignissimos saepe eos! Ipsum?</p>
                                </div>
                                <div className="ven-img">
                                    <img src={ven} alt="" />
                                </div>

                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="settings" className={activeKey === 'settings' ? 'show active' : ''}>
                            <div style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis officia autem cupiditate amet eaque recusandae labore eius laborum unde dicta accusantium voluptate beatae, quibusdam quidem, quisquam quasi assumenda. Dolores eius odio ex, sapiente cumque aliquid, rerum deserunt dolorum esse magni aspernatur natus ipsam quia incidunt quis? Asperiores corrupti fugit cupiditate optio ipsum nostrum possimus natus, perspiciatis nulla porro magni nihil tempore, nam consequuntur placeat molestias ullam quia quis. Placeat, accusamus eius! Dolorum ullam et, harum minima repellat deleniti asperiores itaque illum, corrupti quos sit quaerat natus iure ab laborum debitis adipisci at qui inventore, repellendus reiciendis excepturi odit neque?</div>
                        </Tab.Pane>
                    </Tab.Content>
                </div>

            </div>
            {

                addReview && <label className="wishlis-pop"><Check2Circle></Check2Circle>Added Successfully</label>
            }

<RelatedProducts></RelatedProducts>
            <Secure></Secure>
        </>
        
    );
}

