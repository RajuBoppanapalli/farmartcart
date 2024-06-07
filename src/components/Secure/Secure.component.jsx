import rocket from "../../assets/images/rocket.png"
import reload from "../../assets/images/reload.png"
import protect from "../../assets/images/protect.png"
import suppot from "../../assets/images/support.png"
import tag from "../../assets/images/tag.png"
import"../Secure/Secure.component.css"

export function Secure(){
    return(
    <>
    <div className="secure row" >
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
        
        <div className="secure-inner col">
            <div><img src={suppot} alt="" /></div>
            <div className="secure-content">
                <h5>24/7 Dedicated Support</h5>
                <p>Anywhere & anytime</p>
            </div>
        </div>
        
        <div className="secure-inner col">
            <div><img src={tag} alt="" /></div>
            <div className="secure-content">
                <h5>Daily Offers</h5>
                <p>Discount up to 70% OFF</p>
            </div>
        </div>
        
        
    </div>
    </>
    )
}