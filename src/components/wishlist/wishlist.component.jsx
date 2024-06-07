import { Cart3, Trash } from "react-bootstrap-icons";
import Farm18 from "../../assets/images/farm18.jpg";
import Farm19 from "../../assets/images/farm19.jpg";
import Farm21 from "../../assets/images/farm21.jpg";
import Farm22 from "../../assets/images/farm22.jpg";
import"../wishlist/wishlist.component.css"
import { Button } from "react-bootstrap";
import { getwishlist } from "../../services/wishlist.service";
import React, { useContext, useEffect, useState } from "react";
import PopUpModel from "../sharedcomponents/popupmodel.component";
import { DeletePopUp } from "./deletepopup.component";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { WishlistContext } from "../../services/wishlistcontext";
import { getLocalStorageItem } from "../../services/storage/local.storage";
export function Wishlist(){
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
    const [wishlistdata, setwishlistdata] = useState([]);
    const [pageSize, setpageSize] = useState(4);
    const [pageNumber, setpageNumber] = useState([]);
    const [totalitems, settotalitems] = useState([]);
    const [showdeletepoup, setshowdeletepoup] = useState(false);
    const [deletewishlistid, setdeletewishlistid] = useState(null);

    const [usersData, setUsersData] = useState(null);
    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            setUsersData(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        if (usersData && usersData.length > 0) {
            const cid = usersData[0].customerid;
            axios.get(`http://localhost:4002/getwishlistdata/${cid}`)
                .then((res) => {
                    settotalitems(res.data);
                    let pNumbers = Math.ceil(res.data.length / pageSize); 
                    let pNumberArray = Array.from({ length: pNumbers }, (_, index) => index + 1); 
                    setpageNumber(pNumberArray);
                    let data = res.data.slice(0, pageSize); 
                    setwishlistdata(data);
                })
                .catch((error) => {
                    console.error('Error fetching cart data:', error);
                   
                });
        }
    }, [usersData]);

    
    function gotopage(num) {
        let startindex = pageSize * (num - 1);
        let lastindex = pageSize * num;
        let res = totalitems.slice(startindex, lastindex);
        setwishlistdata(res);
    }

    
    function showDeletePopup(id) {
        setdeletewishlistid(id);
        setshowdeletepoup(true);
    }

    
    const deletewishlistitm = (id) => {
        axios.delete(`http://localhost:4002/wishlist/del/${id}`).then((res) => {
            removeFromWishlist(id);
            setshowdeletepoup(false);
            window.location.reload();
        });
    }


    const navigate=useNavigate();
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
 
    return(
        <>
          <div className="breadcrumb">
                <span><a href="#">Homes</a> / <a href="#">Stores</a></span>
            </div>
            <div className="contact-head">
                <h1>Wishlist</h1>
            </div>

            <div className="wishlish-table">
              <table style={{width:"1100px",}}  >
                <thead style={{ backgroundColor:"#f7f7f7", padding:"20px"}}  >
                    <tr >
                        <th style={{  padding:"10px"}}>Products</th>
                        <th style={{  padding:"10px"}}>Unit Price</th>
                        <th style={{  padding:"10px"}}>Stock Status</th>
                        <th style={{  padding:"10px"}}> Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        wishlistdata && wishlistdata.map((iteam, index) =>
                        
                            <tr>
                            <td>
                                <div className="wishlist-product">
                                    <div>
                                    {
                                    iteam.product_image && <img src={iteam.product_image} alt="" />
                                }
                                {
                                    !iteam.product_image && <img src={Farm18} alt="" />
                                }
                                        
                                        </div>
                                    <span className="wishlist-product-info">
                                        <p>{iteam.product_name}</p>
                                        <span>Vendor:</span><span className="vender">{iteam.product_brand}</span>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <span>${iteam.newprice}</span>
                            </td>
                            <td>
                                <span className="active">Active</span>
                            </td>
                            <td>
                                <div className="wishlist-action">
                                    <div>

                                       <Button variant="warning" className="m-2" onClick={() => { handleaddtocart(iteam.product_id)}} ><Cart3 className="m-2 mt-0"></Cart3>Add To Cart</Button>
                                    </div>
                                    <div>
                                        <Button variant="danger" className="m-2"><Trash onClick={() =>  showDeletePopup(iteam.id)}></Trash></Button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                       
                        )}
                     </tbody>
              </table>
              <div className="pagination">

                {
                    pageNumber && pageNumber.map((iteam) =>
                        <Button type="button" className="me-2" onClick={() => { gotopage(iteam) }}>{iteam}</Button>
                    )
                }

            </div>
            </div>
            <div>


<PopUpModel open={showdeletepoup} title={"Delete Item"} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)}>
    <DeletePopUp deletewishlistitm={() => deletewishlistitm(deletewishlistid)} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)} />
</PopUpModel>



</div>
        </>
    );
}