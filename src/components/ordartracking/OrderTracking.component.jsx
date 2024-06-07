import { Button } from "react-bootstrap";
import "../ordartracking/OrderTracking.component.css"
export function OrderTracking(){
    return(
        <>
          <div className="breadcrumb">
                <span><a href="#">Homes</a> / <a href="#">Order tracking</a></span>
            </div>
            <div className="tracking">
               <span className="order"> <b>Order tracking</b></span> 
                <form action="">
                    <label htmlFor="">Order ID * </label>
                    <br />
                    <input type="text" placeholder="OEnter The Order ID" />
                    <br />
                    <label htmlFor="">Email *</label>
                    <br />
                    <input type="text" placeholder=" Enter Your email" />
                    <br />
                    <Button variant="warning">Track</Button>
                </form>
            </div>
        </>
    );
}