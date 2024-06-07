import mart16 from "../../assets/images/mart16.png";
import mart29 from "../../assets/images/mart29.png";
import mart30 from "../../assets/images/mart30.png";
import"../Banner/Banner.component.css"
export function Banner() {
    return (
        <>
            <div className="Banner-div row">
                <div className="banner-img col"><img src={mart16} alt="" /></div>
                <div className="banner-img col"><img src={mart29} alt="" /></div>
                <div className="banner-img col"><img src={mart30} alt="" /></div>
            </div>
        </>
    );

}