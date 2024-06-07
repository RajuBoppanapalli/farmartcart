import React, { useEffect, useState } from "react";
import { getCompare } from "../../services/compare.service";
import "../compare/compare.component.css"
import Table from 'react-bootstrap/Table';
import { Cart3, Dash, Plus, Trash } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import PopUpModel from "../sharedcomponents/popupmodel.component";
import { DeletePopUp } from "../wishlist/deletepopup.component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../services/storage/local.storage";


export function CompareProducts() {
    const [comparedata, setcomparedata] = useState([]);
    const [showdeletepoup, setshowdeletepoup] = useState(false);
    const [deletewishlistid, setdeletewishlistid] = useState(null);


    const [usersData, setUsersData] = useState(null);
   

    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            setUsersData(JSON.parse(data));
        }
    }, []);





    const navigate=useNavigate();
    useEffect(() => {
        if (usersData && usersData.length > 0) {
            const cid = userData[0].customerid;
            axios.get(`http://localhost:4002/getcomparedata/${cid}`).then((res) => {
            setcomparedata(res.data);
          });
        }
    }, [usersData]);






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
            navigate('/shopingcart')
            window.location.reload()
            
        })
    }
    
    function showDeletePopup(id) {
        setdeletewishlistid(id);
        setshowdeletepoup(true);
    }
    const deletewishlistitm = (id) => {
        axios.delete(`http://localhost:4002/compare/del/${id}`).then((res) => {

            setshowdeletepoup(false);
            window.location.reload();
        });
    }
    function increasequantity(index) {
        let data = JSON.parse(JSON.stringify(comparedata));
        data[index].quantity = (data[index].quantity || 1) + 1;
        setcomparedata(data);
    }
    function decrementquantity(index) {

        if (comparedata[index].quantity > 1) {

            let data = JSON.parse(JSON.stringify(comparedata));
            data[index].quantity -= 1;
            setcomparedata(data);
        }
    }
    return (
        <>
            <div className="compare-div">
                <Table striped>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#eee" }}></th>
                            {comparedata.map((iteam, index) => (
                                <th key={index} style={{ backgroundColor: "#eee" }}>{iteam.product_name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                        <tr>
                            <td>Product Image</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}>
                                    <div className="compare-img">
                                        <img src={iteam.product_image} alt="" />
                                    </div>

                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Title</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}  >{iteam.product_name}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>price</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}>{iteam.newprice}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Add to Cart</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}>
                                    <div className="addtocart">
                                        <div className="wish-qan">
                                            <span><Dash onClick={() => { 
                                                decrementquantity(index) 
                                                setqid(iteam.quantity - 1);}}></Dash></span>
                                            <span>{iteam.quantity}</span>
                                            <span ><Plus onClick={() => {
                                                 increasequantity(index) 
                                                 setqid(iteam.quantity + 1);}}></Plus></span>
                                        </div>
                                        <div>
                                          
                                      <Button variant="warning" className="me-2"  onClick={() => { handleaddtocart(iteam.product_id)}} ><Cart3 ></Cart3>Add To Cart</Button>

                                        </div>

                                    </div>
                                </td>
                            ))}
                        </tr>
                        
                        <tr>
                            <td>SKU</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}>{iteam.sku}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Discription</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}>
                                    <div>
                                        <ul>
                                           <li>Unrestrained and portable active stereo speaker</li>
                                           <li>Free from the confines of wires and chords</li>
                                           <li>20 hours of portable capabilities</li>
                                           <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                        </ul>
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Available</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index} >{iteam.available}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>color</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}> __ </td>
                            ))}
                        </tr>
                        <tr>
                            <td>weight</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}> <button>2kg</button>  </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Size</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}> __  </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Size</td>
                            {comparedata.map((iteam, index) => (
                                <td key={index}><Trash className="" onClick={() => showDeletePopup(iteam.id)}></Trash>  </td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>


                <PopUpModel open={showdeletepoup} title={"Delete Item"} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)}>
                    <DeletePopUp deletewishlistitm={() => deletewishlistitm(deletewishlistid)} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)} />
                </PopUpModel>



            </div>
        </>
    )
}