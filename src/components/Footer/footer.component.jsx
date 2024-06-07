import { Button, Col, Form, Row } from "react-bootstrap";
import { Clock, Envelope, Facebook, HouseDoor, Instagram, Telephone, Twitter, Whatsapp, Youtube } from "react-bootstrap-icons";
import "../Footer/footer.component.css"
import payment from "../../assets/images/payments.png"

export function Footer() {
    return (
        <>
            <div className="Footers row">
                <div className="Footer-text col">
                    <div className="Footer-texts">
                        <p className="k">Farmart – Your Online Foods & Grocery</p>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
                    </div>

                    <div className="Footer-texts">
                        <span><Telephone></Telephone> Hotline 24/7:</span>
                        <h4>(+965) 7492-4277</h4>
                        <span><HouseDoor></HouseDoor> 959 Homestead Street Eastlake, NYC</span>
                        <br />
                        <span><Envelope></Envelope> support@farmart.com</span>
                        <br />
                        <span><Clock></Clock> Mon - Fri: 07AM - 06PM</span>
                    </div>
                </div>
                <div className="Footer-text col">
                    <p>Useful Links</p>
                    <ul>
                        <li>Terms of use </li>
                        <li>Terms and conditions</li>
                        <li>Refund Policy</li>
                        <li>FAQs</li>
                        <li>404 Page</li>
                    </ul>
                </div>
                <div className="Footer-text col">
                    <p>Help Center</p>
                    <ul>
                        <li>About Us</li>
                        <li>Affiliate</li>
                        <li>Carrer</li>
                        <li>Contact Us</li>

                    </ul>
                </div>
                <div className="Footer-text col">
                    <p>Business</p>
                    <ul>
                        <li>Our Blog</li>
                        <li>Cart</li>
                        <li>My account</li>
                        <li>Shop</li>

                    </ul>
                </div>
                <div className="Footer-text col">
                    <p>Newsletter</p>

                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sunt illum minus autem molestias ex quae officiis aliquam? Beatae, fuga.</span>

                    <span><input type="text" />   <button className="bt">subcsrib</button></span>
                             
                        
                </div>


            </div>
            <div className="iteams">
                <span>Consumer Electric:</span> &nbsp; &nbsp;&nbsp;<span><a href="">Fruits|</a> <a href="">Apples|</a> <a href="">Bananas|</a><a href="">Berries|</a><a href="">Oranges & Easy Peelers|</a><a href="">Cabbage, Spinach & Greens|</a><a href="">Grapes</a></span>
                <br />
                <span>Clothing & Apparel:</span> &nbsp; <span><a href="">Lemons & Limes|</a> <a href="">Peaches & Nectarines|</a> <a href="">Pears|</a><a href="">Melon|</a><a href="">Avocados|</a></span>
                <br />
                <span>Home, Garden & Kitchen:</span><span><a href="">Potatoes|</a> <a href="">Vegetables|</a> <a href="">Carrots & RootVegetables|</a><a href="">Broccoli & Cauliflower|</a><a href=""> Plums & Apricots|</a></span>
                <br />
                <span>Health & Beauty:</span> &nbsp; &nbsp; &nbsp; &nbsp;<span><a href="">Breads Sweets|</a> <a href="">Mushrooms|</a> <a href="">Tomatoes|</a><a href="">Beans, Peas & Sweetcorn|</a><a href="">Freshly Drink Orange Juice|</a></span>
                <br />
                <span>Computer & Technologies:</span><span><a href="">Crisps, Snacks & Nuts|</a> <a href="">Crisps & Popcorn|</a> <a href="">Nuts & Seeds|</a><a href="">Lighter Options|</a><a href="">Cereal Bars|</a><a href="">Onions, Leeks & Garlic|</a></span>
            </div>
            <div className="rights row">
                <span className="col">©2024 Farmart. All Rights Reserved.</span>
                <div className="col"><img src={payment} alt="" /></div>
                <div className="col"><span>Stay connected:</span> <span><Facebook className="m-2"></Facebook></span><span><Instagram className="m-2"></Instagram></span> <span><Twitter className="m-2"></Twitter></span><span><Youtube className="m-2"></Youtube></span> <span><Whatsapp></Whatsapp></span></div>
            </div>
        </>
    )
}