import { ChevronRight } from "react-bootstrap-icons";
import downladimg from "../../assets/images/download.png"
import andriod from "../../assets/images/android.png"
import ios from "../../assets/images/ios.png"
import farm6 from "../../assets/images/farm6.jpg"
import farm4 from "../../assets/images/farm4.jpg"
import "../DailyHealth/DailyHealth.component.css"
export function DailyHealth() {
    return (
        <>
            <div className="Daily-main-div row">
                <div className="a col">
                    <div className="Daily-head" >
                        <span className="Daily-head-main" >Healthy Daily</span>
                     <span className="arrow">All Artical <ChevronRight  size={20} ></ChevronRight></span>
                 
                    </div>
                    <div className="daily-content">
                        <div className="daily-content-img">
                            <div><img src={farm6} alt="" /></div>
                            <div >
                                <span>Lorem ipsum dolor sit amet.20-20-2019</span>
                                <h5>Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente exercitationem modi delectus tenetur ut ipsa. Quod officiis possimus hic?</p>
                            </div>
                        </div>
                        <div className="daily-content-img">
                            <div><img src={farm4} alt="" /></div>
                            <div >
                                <span>Lorem ipsum dolor sit amet.20-20-2019</span>
                                <h5>Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente exercitationem modi delectus tenetur ut ipsa. Quod officiis possimus hic?</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="playstore-div col">
                    <div className="playstore">
                        <img src={downladimg} alt="" />
                    </div>
                    <div className="playstore-content">
                        <h3>Shop Faster With Farmart App</h3>
                        <p>Available on both iOS & Android</p>
                    </div>
                    <div className="playstore-device">
                        <img className="m-5" src={andriod} alt="" />
                        <img src={ios} alt="" />
                    </div>
                </div>

            </div>
        </>
    );
}