import { Button, Col, Form, InputGroup, Navbar, Row } from "react-bootstrap";
import { ArrowLeft, Cart3, Dash, House, Link, Plus, Trash } from "react-bootstrap-icons";
import Farm21 from "../../assets/images/farm21.jpg";
import "../Cart/cart.component.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getcartdata } from "../../services/cart.service";
import PopUpModel from "../sharedcomponents/popupmodel.component";
import { DeleteCartPopUp } from "./deletecartpopup.component";
import { getLocalStorageItem } from "../../services/storage/local.storage";
export function ShopingCart() {
    const [cart, setCart] = useState([]);
    const [pageSize, setpageSize] = useState(4);
    const [pageNumber, setpageNumber] = useState([]);
    const [totalitems, settotalitems] = useState([]);
    const [showdeletepoup, setshowdeletepoup] = useState(false);
    const [deletecartid, setdeletecartid] = useState(null);
   
   
    const [userData, setUserData] = useState(null);
   

    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            setUserData(JSON.parse(data));
        }
    }, []);


    

    useEffect(() => {
        if (userData && userData.length > 0) {
            const cid = userData[0].customerid;
            axios.get(`http://localhost:4002/getcartdata/${cid}`)
                .then((res) => {
                    settotalitems(res.data);
                    let pNumbers = Math.ceil(res.data.length / pageSize); 
                    let pNumberArray = Array.from({ length: pNumbers }, (_, index) => index + 1); 
                    setpageNumber(pNumberArray);
                    let data = res.data.slice(0, pageSize); 
                    setCart(data);
                })
                .catch((error) => {
                    console.error('Error fetching cart data:', error);
                   
                });
        }
    }, [userData]); 
   
    function increasequantity(index) {
        let data = JSON.parse(JSON.stringify(cart));
        data[index].quantity = (data[index].quantity || 1) + 1;
        setCart(data);
    }
    function decrementquantity(index) {

        if (cart[index].quantity > 1) {

            let data = JSON.parse(JSON.stringify(cart));
            data[index].quantity -= 1;
            setCart(data);
        }
    }
    function gotopage(num) {
        let startindex = pageSize * (num - 1);
        let lastindex = pageSize * num;
        let res = totalitems.slice(startindex, lastindex);
        setCart(res);
    }
    function showDeletePopup(id) {
        setdeletecartid(id);
        setshowdeletepoup(true);
    }
    const deletecartiteam = (id) => {
        axios.delete(`http://localhost:4002/cart/del/${id}`).then((res) => {

            setshowdeletepoup(false);
            window.location.reload();
        });
    }

    const totalpriceofcart = (qid,totalamt,pid) => {
        axios.post("http://localhost:4002/totalamtupdate",{qid,totalamt,pid}).then((res) => {
            console.log(res.data);
            window.location.reload()
        })
    }
   



    return (
        <>
            <div className="breadcrumb">
                <span><a href="#">Homes</a> / <a href="#">Stores</a></span>
            </div>
            <div className="contact-head">
                <h1>Shopping Cart</h1>
            </div>

            <div className="cart-table">
                <table style={{ width: "1100px", }}  >
                    <thead style={{ backgroundColor: "#f7f7f7", padding: "20px" }}  >
                        <tr >
                            <th style={{ padding: "10px" }}>Products</th>
                            <th style={{ padding: "10px" }}>Price</th>
                            <th style={{ padding: "10px" }}>Quantity</th>
                            <th style={{ padding: "10px" }}>Total</th>
                            <th style={{ padding: "10px" }}> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart && cart.map((iteam, index) =>
                                <tr >
                                    <td>
                                        <div className="cart-product">
                                            <div>

                                                {
                                                    iteam.product_image && <img src={iteam.product_image} alt="" />
                                                }
                                                {
                                                    !iteam.product_image && <img src={Farm21} alt="" />
                                                }

                                            </div>
                                            <span className="cart-product-info">
                                                <p>{iteam.product_name}</p>
                                                <span>Vendor:</span><span className="vender">{iteam.product_brand}</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span>${iteam.newprice}</span>
                                    </td>
                                    <td>
                                        <div className="wish-qan">
                                            <span><Dash onClick={() => { 
                                                decrementquantity(index)
                                                // alert(iteam.quantity-1,iteam.newprice,iteam.productid)
                                                totalpriceofcart(iteam.quantity-1,parseInt(iteam.newprice),iteam.id);
                                                 }} ></Dash></span>
                                            <span>{iteam.quantity}</span>
                                            <span><Plus onClick={() => { 
                                                increasequantity(index) 
                                                totalpriceofcart(iteam.quantity+1,parseInt(iteam.newprice),iteam.id)
                                                }}></Plus></span>
                                        </div>
                                    </td>
                                    <td> <span>${iteam.totalprice}</span></td>
                                    {/* <td> <span>${iteam.quantity* iteam.newprice}</span></td> */}
                                    <td>
                                        <div className="cart-action">

                                            <div>
                                                <Button variant="danger"><Trash onClick={() => showDeletePopup(iteam.id)}></Trash></Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>

            </div>
            <div className="cart-butns">
                <div>
                    <a href="/products"><Button variant="secondary" className="me-2"><ArrowLeft></ArrowLeft> Continue Shopping</Button></a>

                </div>
                <div>
                    <a href="/home"><Button variant="secondary"><House></House> Back To Home</Button></a>
                </div>
            </div>
            <div className="pagination">

                {
                    pageNumber && pageNumber.map((iteam) =>
                        <Button type="button" className="me-2 " onClick={() => { gotopage(iteam) }}>{iteam}</Button>
                    )
                }

            </div>
            <div>
                <PopUpModel open={showdeletepoup} title={"Delete Item"} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)}>
                    <DeleteCartPopUp deletecartiteam={() => deletecartiteam(deletecartid)} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)}></DeleteCartPopUp>
                </PopUpModel>

            </div>
            <div className="cart-price">
                <div className="cart-promo">
                    <h3>Using Prome Code ?</h3>
                    <Navbar className="bg-body-tertiary justify-content-between">
                        <Form inline>
                            <InputGroup>

                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1">Apply</InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </Navbar>
                </div>
                <div className="cart-total" >
                    <div className="cart-total-price">
                        <h4>Cart Total</h4>
                        <p>subtotal:<span>$94.7</span> </p>
                    </div>
                    <div className="cart-total-price">
                    <p>Tax: &nbsp;   <span>$101.0</span> </p>
                    </div>
                    <div className="cart-total-price">
                        <p>Total: <span>$1120</span> </p>
                    </div>
                    <div>
                        <Button className="mt-3">Proceed to Checkout</Button>
                    </div>
                </div>
            </div>
        </>
    );
}