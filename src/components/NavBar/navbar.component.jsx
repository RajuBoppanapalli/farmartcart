

import React, { useContext, useEffect, useRef, useState } from "react";
import "../NavBar/navbar.component.css"
import { Button, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Nav, NavDropdown, Navbar, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { ArrowRepeat, BoxArrowRight, CardList, Cart, Cart3, Heart, House, Link, Person, Search, Star, Tag, Trash } from "react-bootstrap-icons";
import logo from "../../assets/images/mart22.png"
import { Navigate, useNavigate } from "react-router-dom";
import Farm21 from "../../assets/images/farm21.jpg";
import Image from 'react-bootstrap/Image';
import { getLocalStorageItem, removeLocalStorageItem } from "../../services/storage/local.storage";
import { WishlistContext } from "../../services/wishlistcontext";
import { CartContext } from "../../services/cartcontext";
import { CompareContext } from "../../services/comparecontext";
import store from "../../services/reduxstore.service";
import axios from "axios";
import { RelatedProducts } from "../RelatedProducts/RelatedProducts.component";

export function NavBarComp() {
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [shopcategory, setshopcategory] = useState(false);
    const [asd, setasd] = useState("Shop");
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    const isMountedRef = React.useRef(false);
    const { wishlistCount } = useContext(WishlistContext);
    const { cartCount } = useContext(CartContext);
    const { compareCount } = useContext(CompareContext);
    const [shopCategory, setShopCategory] = useState(false);
    const [showElement, setShowElement] = useState(false);
    const [bread, setBread] = useState(false);
    const [cart, setCart] = useState([]);

    const [usersData, setUsersData] = useState(null);


    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            setUsersData(JSON.parse(data));
        }
    }, []);






    useEffect(() => {
        if (usersData && usersData.length > 0) {
            const cid = userData[0].customerid;
            axios.get(`http://localhost:4002/getcartdata/${cid}`).then((res) => {
                setCart(res.data);
            });
        }
    }, [usersData]);


    useEffect(() => {
        isMountedRef.current = true;
        const data = getLocalStorageItem("userdata");
        if (data && isMountedRef.current) {
            setUserData(JSON.parse(data));
        }
        return () => {
            isMountedRef.current = false;
        };
    }, []);
    // Logout function
    const handleLogout = () => {
        removeLocalStorageItem("userdata");
        setUserData(null);
        if (isMountedRef.current) {
            navigate("/login");
        }
    };



    const handlePagesDropdownEnter = () => {
        setPagesDropdownOpen(true);
    };

    const handlePagesDropdownLeave = () => {
        setPagesDropdownOpen(false);
    };


    const handleShopDropdownEnter = () => {
        setShopDropdownOpen(true);
    };

    const handleShopDropdownLeave = () => {
        setShopDropdownOpen(false);
    };
    const handleShopCategoryEnter = () => {
        setShopCategory(true);
    };

    const handleShopCategoryLeave = () => {
        setShopCategory(false);
    };

    const handleItemEnter = () => {
        setShowElement(true);
    };

    const handleItemLeave = () => {
        setShowElement(false);

    };

    const handleBreadEnter = () => {
        setBread(true);
    };

    const handleBreadLeave = () => {
        setBread(false);
    };

    function handleSubItemClick(event) {
        const clickedSubItem = event.target;
        const clickedText = clickedSubItem.textContent;
        const mainItem = clickedSubItem.closest('.main-item');
        mainItem.firstChild.textContent = clickedText;
    }


    document.querySelectorAll('.sub-item').forEach(subItem => {
        subItem.addEventListener('click', handleSubItemClick);
    });


    let searchProductRef = useRef();

    async function searchForProduct() {
        const formData = new FormData();
        formData.append('product_name', searchProductRef.current.value);
        formData.append('product_brand', searchProductRef.current.value);
        formData.append('soldby', searchProductRef.current.value);
        const config = {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        };
        const res = await axios.post('http://localhost:4002/searchproduct', formData, config);
        store.dispatch({ type: "product", data: res.data });

    }
    const transformedValues = cart.map(value => value.newprice);
    const totalPrice = cart.reduce((acc, item) => acc + item.newprice, 0);
    const tv = cart.map(a => a.newprice)
    return (
        <>
            <div className="nav row">
                <div className="nav1 ">
                    <ul className="nav1-ul">
                        <li>About Us</li>|
                        <li><a href="/wishlist">Wishlist</a></li>|
                        <li><a href="/Tracking-order">Order Tracking</a></li>
                    </ul>
                </div>
                <div className="nav1-sub col-lg-6 col-md-12">

                    <ul className="main-item-sub" >
                        <li class="main-item">English
                            <ul className="">
                                <li class="sub-item">Arabic</li>
                                <li class="sub-item">English</li>
                                <li class="sub-item">Italy</li>
                            </ul>
                        </li>
                     
                        <li class="main-item">US
                            <ul className="main-item-sub">
                                <li class="sub-item">Aus</li>
                                <li class="sub-item">Eng</li>
                                <li class="sub-item">Uk</li>
                            </ul>

                        </li>
                      
                        {userData ? (

                            <li className="name">
                                <b >{userData[0]?.full_name}</b>

                                &nbsp;
                                <Button className="logout-btn me-2" variant="warning" onClick={handleLogout}>
                                    Logout
                                    &nbsp;
                                    <BoxArrowRight></BoxArrowRight>
                                </Button>
                            </li>
                        ) : (

                            <>
                                <div className="name">
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/register">Register</a></li>
                                </div>

                            </>
                        )}
                    </ul>



                </div>
            </div>

            <Navbar className="navbar2" expand="lg" fluid>
                <Row className="w-100">

                    <Col xs={12} md={3} className="nav2">
                        <a href="/home"> <Image  src={logo} alt="Logo" /></a>

                    </Col>


                    <Col xs={12} md={6} className="nav2-1">
                        <Form inline className="w-70">
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="Dropdown"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>

                                <Form.Control aria-label="Text input with dropdown button" placeholder="search your product...." ref={searchProductRef} />
                                <Button variant="outline-secondary"><Search onClick={() => { searchForProduct() }}></Search></Button>
                            </InputGroup>
                        </Form>
                    </Col>


                    <Col xs={6} md={2} className="nav2-2">
                        <div>
                            <h4 className="mb-0">99756898-85</h4>
                            <p className="mb-0">24/7 support</p>
                        </div>
                    </Col>


                    <Col xs={6} md={1} className="nav2-3 d-flex ">
                        <span className="d-flex ">
                            <a href="/compare">  <ArrowRepeat className="me-3  icon-large" /></a>
                            <span className="notif">{compareCount}</span>
                            <a href="/wishlist"><Heart className="me-3  icon-large" /></a>
                            <span className="notif1">{wishlistCount}</span>
                            {/* <a href="/shopingcart"><Cart className="me-3 icon-large" /></a> */}
                            <OverlayTrigger

                                placement="bottom"
                                overlay={



                                    <div className="nav-cart-hov">
                                        <table    >

                                            <tbody>
                                                {
                                                    cart && cart.map((iteam, index) =>
                                                        <tr>
                                                            <td className="nav-cart-tdet">
                                                                <div className="nav-cart-img">
                                                                    {
                                                                        iteam.product_image && <img src={iteam.product_image} alt="" />
                                                                    }
                                                                    {
                                                                        !iteam.product_image && <img src={Farm21} alt="" />
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td className="nav-cart-tdet">
                                                                <div style={{ width: "200px" }}>
                                                                    <span>{iteam.product_name}</span>
                                                                    <br />
                                                                    <span><b style={{ color: "#FAB528" }}>{iteam.product_brand}</b></span>
                                                                    <br />
                                                                    <span>${iteam.newprice} <del>${iteam.newprice}</del> (x1)</span>
                                                                    <br />
                                                                    <span>(Weight: 4KG, Boxes: 5 Boxes)</span>

                                                                </div>
                                                            </td>
                                                            <td className="nav-cart-tdet"> <Trash></Trash></td>
                                                        </tr>

                                                    )}
                                                <tr>
                                                    <td ><p>Sub total:</p> </td>
                                                    <td> </td>
                                                    <td> $647.0</td>

                                                </tr>
                                                <tr>
                                                    <td><p>tax :</p> </td>
                                                    <td> </td>
                                                    <td> $647.0</td>

                                                </tr>
                                                <tr>
                                                    <td><p>total :</p> </td>
                                                    <td> </td>
                                                    <td> $647.0</td>

                                                </tr>
                                                <tr>
                                                  
                                                        <td>
                                                           <Button>Checkout </Button>
                                                        </td>
                                                        <td>
                                                           <Button>View Cart</Button>
                                                        </td>
                                                </tr>




                                            </tbody>

                                        </table>
                                    </div>



                                }

                            >
                                {({ ref, ...triggerHandler }) => (
                                    <span className="ms-1" ref={ref}   {...triggerHandler}><a href="/shopingcart"><Cart className="me-3 icon-large" /></a></span>

                                )}
                            </OverlayTrigger>
                            <span className="notif2">{cartCount}</span>
                            <span className="yourcart"> <p className="yourcarts">Your cart: ${cart.map(va => va.totalprice).reduce((a,c) => a+c,0)}</p></span>

                        </span>
                    </Col>
                </Row>
            </Navbar>


            <Navbar collapseOnSelect expand="lg" className="asshh">

                <Container className="asshh-1">

                    <Navbar.Brand className="ash" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <NavDropdown
                            title="SHOP BY CATEGORY"
                            show={shopCategory}
                            onMouseEnter={handleShopCategoryEnter}
                            onMouseLeave={handleShopCategoryLeave}
                        >
                            <NavDropdown.Item
                                href=""
                                show={showElement}
                                onMouseEnter={handleItemEnter}
                                onMouseLeave={handleItemLeave}
                            >
                                Fruits & Vegetables
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href=""
                                show={bread}
                                onMouseEnter={handleBreadEnter}
                                onMouseLeave={handleBreadLeave}
                            >
                                Breads and Sweets
                            </NavDropdown.Item>

                            <NavDropdown.Item href="">Forzen Seafoods</NavDropdown.Item>
                            <NavDropdown.Item href="">Raw Meats</NavDropdown.Item>
                            <NavDropdown.Item href="">Wines & Alcohal Drinks</NavDropdown.Item>
                            <NavDropdown.Item href="">Tea & Coffee</NavDropdown.Item>
                            <NavDropdown.Item href="">Milks and Dairies</NavDropdown.Item>
                            <NavDropdown.Item href="">Pet Foods</NavDropdown.Item>
                            <NavDropdown.Item href="">Food Cupboard</NavDropdown.Item>
                        </NavDropdown>


                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/shopone">
                                <Tag />
                                Special Prices
                            </Nav.Link>


                            <NavDropdown

                                title="Pages"
                                id="collapsible-nav-dropdown"
                                show={pagesDropdownOpen}
                                onMouseEnter={handlePagesDropdownEnter}
                                onMouseLeave={handlePagesDropdownLeave}
                            >
                                <NavDropdown.Item href="">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="">Terms of Use</NavDropdown.Item>
                                <NavDropdown.Item href="">Terms & Conditions</NavDropdown.Item>
                                <NavDropdown.Item href="">Refund Policy</NavDropdown.Item>
                                <NavDropdown.Item href="">Comming Soon</NavDropdown.Item>

                            </NavDropdown>


                            <NavDropdown
                                title={asd}
                                id="collapsible-nav-dropdown"
                                show={shopDropdownOpen}
                                onMouseEnter={handleShopDropdownEnter}
                                onMouseLeave={handleShopDropdownLeave}

                            >
                                <NavDropdown.Item href="/products">All Products</NavDropdown.Item>
                                <NavDropdown.Item href=""     >Products Of Category</NavDropdown.Item>
                                <NavDropdown.Item href="">Product Single</NavDropdown.Item>

                            </NavDropdown>

                            <Nav.Link href="/store">Stores</Nav.Link>
                            <Nav.Link href="/Blog">Blog</Nav.Link>
                            <Nav.Link href="">FAQs</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>


                        <Nav className="recent">
                            <Nav.Link href="#deets">
                                <ArrowRepeat />
                                &nbsp;
                                Recent View
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>



            </Navbar>


            <div id="hoverElement" className="fruitsmain" style={{ display: showElement ? 'block' : 'none' }}  >
                <div className="fruitsdiv">
                    <div>
                        <p className="list-head"><b>Fruits</b> </p>
                        <ul>
                            <li>Apple</li>
                            <li>Banana</li>
                            <li>Orange</li>
                            <li>Grapes</li>
                            <li>Pears</li>
                            <li>melon</li>
                            <li>Avocados</li>
                            <li>Lemons</li>
                        </ul>

                    </div>
                    <div>
                        <p className="list-head"><b>Vegetables</b> </p>
                        <ul>
                            <li>potatoes</li>
                            <li>carrots &root vegtables</li>
                            <li>Broccoli</li>
                            <li>cabbage</li>
                            <li>Cauliflower</li>
                            <li>Mushrooms</li>
                            <li>Tamatoes</li>
                            <li>Onions</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div id="hoverElement" className="Bread" style={{ display: bread ? 'block' : 'none' }}  >
                <div className="fruitsdiv">
                    <div>
                        <p className="list-head"> <b>Cripcy,Snacks & Nuts </b> </p>
                        <ul>
                            <li>Crips & Popcorn</li>
                            <li>Nuts & Seeds</li>
                            <li>Lighter Options</li>
                            <li>Cereal Bars</li>
                            <li>Fruit Snacking</li>
                            <li>Meat Snacks</li>
                            <li>Protein</li>
                            <li>Rice & Corn Cakes</li>
                        </ul>

                    </div>
                    <div>
                        <p className="list-head"> <b>Tins & cons</b> </p>
                        <ul>
                            <li>Tamatoes</li>
                            <li>Baked Beans</li>
                            <li>Fish</li>
                            <li>Fruits</li>
                            <li>Beans & Pulses</li>
                            <li>Olives</li>
                            <li>Sweetcorn</li>
                            <li>Peas</li>
                        </ul>

                    </div>
                </div>
                <div></div>
            </div>




        </>
    )
}