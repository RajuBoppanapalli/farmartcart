import { ArrowRepeat, ArrowsMove, Cart3, CheckCircle, Dash, Grid3x3Gap, Grid3x3GapFill, Heart, HeartFill, Justify, List, Plus, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import producbanner from "../../assets/images/farm30.png"
import { Button, Col, Container, Dropdown, Form, NavDropdown, Row } from "react-bootstrap";
import "../product/product.component.css"
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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFormartProduct } from "../../services/farmartproducts.service";
import axios from "axios";
import { getLocalStorageItem } from "../../services/storage/local.storage";
import { RelatedProducts } from "../RelatedProducts/RelatedProducts.component";
import { Secure } from "../Secure/Secure.component";
import store from "../../services/reduxstore.service";
export function Products() {
    const [farmartProducts, setfarmartProducts] = useState([]);
    const [addwishlistmsg, setaddwishlistmsg] = useState(false);
    const [addcomparemsg, setaddcomparemsg] = useState(false);
    const [addcartmsg, setaddcartmsg] = useState(false);
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
    const navigate = useNavigate();
    useEffect(() => {
        getFormartProduct().then((res) => {
            setfarmartProducts(res.data)

        })
        store.subscribe(() => {
            const product = store.getState().products;
            setfarmartProducts(product);
 });
    }, []);


    
    const [openItems, setOpenItems] = useState({
        Electronics: false,
        Fashion: false,
    });

    const handleCategoryClick = (category) => {
        setOpenItems(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const handleSubCategoryClick = (category, subcategory) => {
        setOpenItems(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [subcategory]: !prevState[category]?.[subcategory]
            }
        }));
    };
    const navigate1=useNavigate();
    const [userData, setUserData] = useState(null); 
    React.useEffect(()=>{
        const data = getLocalStorageItem("userdata");
        setUserData(JSON.parse(data)); 
    },[])
    const [qid,setqid]=useState(1);
    const handleaddtocart = (pid) => {
        console.log({
            productid:pid,
            customerid:userData[0]?.customerid
          });
        axios.post('http://localhost:4002/addtocart',{
            quantity:qid,
          productid:pid,
          customerid:userData[0]?.customerid
        }).then((res)=>{
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
            <Container fluid>
                <div className="product-banner">
                    <div><img src={producbanner} alt="" /></div>
                </div>

                <div>
                    <div className="product-header">
                        <div className="product-header-head"><h4>Products</h4></div>
                        <div className="product-header-Sort">
                            <div>Sort By</div>
                            <div>      <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Default
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></div>

                        </div>
                        <div className="product-header-view">
                            <span className="me-2">View : </span>
                            <Grid3x3Gap className="me-3" onClick={handle4ColView} />
                            <List onClick={handle2ColView}></List>
                        </div>

                    </div>

                    <div className="products-main">
                        <div>
                            <div className="cat">

                                <h4>Catagories</h4>
                                <ul>
                                    <li onClick={() => handleCategoryClick('Fruits & Vegatables')}>Fruits & Vegatables      &nbsp; &nbsp; <Plus></Plus>

                                        {openItems['Fruits & Vegatables'] && (
                                            <ul>
                                                <li onClick={(e) => e.stopPropagation()}>
                                                    <span onClick={() => handleSubCategoryClick('Fruits & Vegatables', 'Fruits')}>Fruits</span>
                                                    {openItems['Fruits & Vegatables']['Fruits'] && (
                                                        <ul>
                                                            <li>
                                                                Apple
                                                            </li>
                                                            <li>
                                                               Banana
                                                            </li>
                                                            <li>
                                                               Berries
                                                            </li>
                                                            <li>
                                                           Orange & Easy Peelers
                                                            </li>
                                                            <li> Grapes</li>
                                                            <li>Melon</li>
                                                            <li>Avocados</li>
                                                        </ul>
                                                    )}

                                                </li>
                                                <li onClick={(e) => e.stopPropagation()}>
                                                    <span onClick={() => handleSubCategoryClick('Fruits & Vegatables', 'Vegatables')}>Vegatables</span>
                                                    {openItems['Fruits & Vegatables']['Vegatables'] && (
                                                        <ul>
                                                            <li>
                                                                Potatoes
                                                            </li>
                                                            <li>
                                                             Carrot Root Vegatables
                                                            </li>
                                                            <li>
                                                                Broccoli & Cauliflower
                                                            </li>
                                                            <li>
                                                              Onions
                                                            </li>
                                                            <li> Tamatoes</li>
                                                            <li>Sweetcoorn</li>
                                                            <li>Mushrooms</li>
                                                        </ul>
                                                    )}
                                                </li>

                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={() => handleCategoryClick('Bread&Sweet')}>Bread & Sweets   <Plus className="ml-2"></Plus>

                                        {openItems['Bread&Sweet'] && (

                                            <ul>
                                                <li onClick={(e) => e.stopPropagation()}>
                                                    <span onClick={() => handleSubCategoryClick('Bread&Sweet', 'Nuts')}>Crips, Snacks & Nuts</span>
                                                    {openItems['Bread&Sweet']['Nuts'] && (

                                                        <ul>
                                                            <li>
                                                                Crips & Popcorn
                                                            </li>
                                                            <li>
                                                              Nuts & Seed
                                                            </li>
                                                            <li>
                                                               Lighter Options
                                                            </li>
                                                            <li>
                                                           Cereal Bars
                                                            </li>
                                                            <li>Fruit Snacking</li>
                                                            <li>Rice & Corn Cakes</li>
                                                            <li>Beeans</li>
                                                        </ul>
                                                    )}
                                                </li>

                                                <li onClick={(e) => e.stopPropagation()}>
                                                    <span onClick={() => handleSubCategoryClick('Bread&Sweet', 'Tins')}>Tins & Cans</span>
                                                    {openItems['Bread&Sweet']['Tins'] && (

                                                        <ul>
                                                            <li>
                                                               Tamatoes
                                                            </li>
                                                            <li>
                                                                Bean & Pluses
                                                            </li>
                                                            <li>
                                                            Fruits
                                                            </li>
                                                            <li>
                                                                Coconuts Milk & Creams
                                                            </li>
                                                            <li> Olives</li>
                                                            <li>Carrots</li>
                                                            <li>Peas</li>
                                                        </ul>
                                                    )}
                                                </li>

                                            </ul>
                                        )}
                                    </li>
                                    <li>Frozen Seafoods</li>
                                    <li>Raw Meats</li>

                                    <li onClick={() => handleCategoryClick('Alcohol')}>Whine & Alcohol Drinks  <Plus></Plus>

                                        {openItems['Alcohol'] && (


                                            <ul>
                                                <li onClick={(e) => e.stopPropagation()}>
                                                    <span onClick={() => handleSubCategoryClick('Alcohol', 'Ready Meals')}>Ready Meals</span>
                                                    {openItems['Alcohol']['Ready Meals'] && (

                                                        <ul>
                                                            <li>
                                                                Meal for 1
                                                            </li>
                                                            <li>
                                                            Meal for 2
                                                            </li>
                                                            <li>
                                                              Indian
                                                            </li>
                                                            <li>
                                                               Italian
                                                            </li>
                                                            <li>Chinees</li>
                                                            <li>Lighter Meals</li>
                                                            <li> Thai Orental</li>
                                                        </ul>
                                                    )}
                                                </li>
                                                <li onClick={(e) => e.stopPropagation()}>
                                                    <span onClick={() => handleSubCategoryClick('Alcohol', 'Salad & herbs')}>Salad & herbs</span>
                                                    {openItems['Alcohol']['Salad & herbs'] && (

                                                        <ul>
                                                            <li>
                                                            Salad Bag
                                                            </li>
                                                            <li>
                                                               Cucumber
                                                            </li>
                                                            <li>
                                                                Tamatoes
                                                            </li>
                                                            <li>
                                                             Lettuce
                                                            </li>
                                                            <li> peppers</li>
                                                            <li>Spring Onions</li>
                                                            <li>Chilli Ginger & Garlic</li>
                                                        </ul>
                                                    )}
                                                </li>


                                            </ul>
                                        )}
                                    </li>
                                    <li>Tea & Coffee</li>
                                    <li>Milks and Dairies</li>
                                    <li>Pet Foods</li>
                                    <li>Food Cupboard</li>
                                </ul>
                            </div>
                            <div className="product-brand">
                                <p>Brands</p>
                                <input type="checkbox" /> <span>Food Pound</span><span>(12)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(10)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(21)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(14)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(16)</span>
                            </div>
                            <div className="product-trends">
                                <p>Trends</p>
                                <input type="checkbox" /> <span>Food Pound</span><span>(12)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(10)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(21)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(14)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(16)</span>
                                <br />
                                <input type="checkbox" /> <span>Food Pound</span><span>(16)</span>
                            </div>
                            <div className="range-bar">

                                <Form.Label className="rangee"><b>BY PRICE</b> </Form.Label>
                                <Form.Range />
                                <span>$750.98</span>  &nbsp;<span>$90.0</span>
                            </div>
                            <div className="range-weight">
                                <p>BY WEIGHT</p>
                                <button className="m-1">2kg</button>
                                <button className="m-1">3kg</button>
                                <button className="m-1">4kg</button>
                                <button className="m-1">5kg</button>

                            </div>
                            <div className="range-size">
                                <p>BY SIZE</p>
                                <button className="m-1">S</button>
                                <button className="m-1">L</button>
                                <button className="m-1">XL</button>
                                <button className="m-1">XXL</button>

                            </div>
                            <div className="range-boxes">
                                <p>BY BOXES</p>
                                <button className="m-1">2BOXES</button>
                                <button className="m-1">3BOXES</button>
                                <button className="m-1">4BOXES</button>
                                <button className="m-1">5BOXES</button>

                            </div>
                        </div>
                        <Container fluid>

                            <Row className="products-display">
                                {
                                    farmartProducts && farmartProducts.map((iteam,index) =>
                                        <Col {...getColProps()} className="products-full col">
                                            <div className="products-img" >
                                                {
                                                    iteam.product_image && <img src={iteam.product_image} alt="" />
                                                }
                                                {
                                                    !iteam.product_image && <img src={Farm18} alt="" />
                                                }
                                            </div>
                                            <div className="products-icons">
                                                <span><ArrowsMove></ArrowsMove></span>
                                                <br />
                                                {/* <form id={"wishlist" + iteam.product_id} method="post" action="http://localhost:4002/addtowishlist">
                                                    <input type="hidden" value={iteam.product_id} name="productid" ></input>
                                                </form> */}
                                                {/* <span onClick={() => { document.getElementById("wishlist" + iteam.product_id).submit(); setaddwishlistmsg(true) }}> <Heart></Heart></span> */}
                                                <span onClick={() => { handleaddtowishlist(iteam.product_id)}}> <Heart></Heart></span>
                                                <br />
                                                {/* <form id={"compare" + iteam.product_id} method="post" action="http://localhost:4002/addtocompare">
                                                    <input type="hidden" value={iteam.product_id} name="productid" ></input>
                                                </form> */}
                                                {/* <span onClick={() => { document.getElementById("compare" + iteam.product_id).submit();setaddcomparemsg(true) }}> <ArrowRepeat></ArrowRepeat></span> */}
                                                <span onClick={() => { handleaddtocompare(iteam.product_id)}}> <ArrowRepeat></ArrowRepeat></span>
                                            </div>
                                            <span className="Hot">{iteam.offer_percent}%</span>
                                            <div className="products-disp ">
                                                <h6>{iteam.soldby}</h6>
                                                <h6 className="products-disp-dis" >{iteam.product_name}</h6>
                                            </div>
                                            <div className="products-sale">
                                                <span><StarFill className="start"></StarFill><StarFill className="start"></StarFill ><StarFill className="start"></StarFill ><StarHalf className="start"></StarHalf><Star className="start"></Star></span>
                                                <br />
                                                <span className="products-rate">${iteam.newprice} </span><del>${iteam.oldprice}</del>
                                                <br />
                                            </div>
                                            <div className="products-cart">
                                                <div className="products-quantity">
                                                    <span><Dash onClick={() => { 
                                                        decrementquantity(index) 
                                                        setqid(iteam.quantity - 1);}}></Dash></span>
                                                    <span className="m-2">{iteam.quantity}</span>
                                                    <span><Plus onClick={() => { 
                                                        increasequantity(index)
                                                        setqid(iteam.quantity + 1); }}></Plus></span>
                                                </div>
                                               
                                                <Button variant="warning" className="mt-2" onClick={() => { handleaddtocart(iteam.product_id)}}  ><Cart3 className="m-2 mt-0"></Cart3>Add To Cart</Button>
                                            </div>
                                        </Col >

                                    )}
                            </Row >


                        </Container>

                    </div>

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
            </Container>
            <RelatedProducts></RelatedProducts>
            <Secure></Secure>
        </>
    );
}