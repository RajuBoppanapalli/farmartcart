import { NavLink } from "react-bootstrap";
import"../bottomnavbar/bottomnavbar.css"
import { Home } from "../Home/home.component";
import { CardList, Cart3, Heart, House, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export function BottomNavbar(){
    const navigate=useNavigate();
    return(
        <>
        <div className="navbar-footer">
      
                    <div  className="navbar-footer-icons" ><span onClick={()=>{navigate("/home")}}><House></House> Home</span></div>
                    <div className="navbar-footer-icons" > <span onClick={()=>{navigate("/products")}}><CardList></CardList> Category</span></div>
                    <div  className="navbar-footer-icons"><span onClick={()=>{navigate("/shopingcart")}}><Cart3></Cart3> cart</span></div>
                    <div className="navbar-footer-icons" > <span onClick={()=>{navigate("/wishlist")}} ><Heart></Heart> Wishlist</span></div>
                    <div  className="navbar-footer-icons"><span onClick={()=>{navigate("/login")}}><Person ></Person> Account</span></div>
                   
           
            
        </div>
        </>
    );
}