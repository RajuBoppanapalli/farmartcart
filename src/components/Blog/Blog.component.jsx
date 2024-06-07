import { Form, InputGroup } from "react-bootstrap";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.jpg";
import blog6 from "../../assets/images/blog6.jpg";
import blog7 from "../../assets/images/blog7.jpg";
import blog8 from "../../assets/images/blog8.jpg";
import blog9 from "../../assets/images/blog9.jpg";
import "../Blog/Blog.component.css";
import { Search } from "react-bootstrap-icons";

export function Blog() {
    return (
        <>
            <div className="breadcrumb">
                <span><a href="#">Homes</a> / <a href="#">Stores</a></span>
            </div>
            <div className="head"><h1>Blog</h1></div>
            <div className="blog-screen row">
                <div className="blog-main col-lg-8 col-md-12">
                  
                    <div className="blogs-div">
                      
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog1} alt="Blog post 1" />
                            </div>
                            <div className="blog-content">
                                <h3>4 Expert Tips On How To Choose The Right Men’s Wallet</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                      
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog2} alt="Blog post 2" />
                            </div>
                            <div className="blog-content">
                                <h3>Sexy Clutches: How to Buy & Wear a Designer Clutch Bag</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                      
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog4} alt="Blog post 3" />
                            </div>
                            <div className="blog-content">
                                <h3>The Top 2020 Handbag Trends to Know</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog5} alt="Blog post 3" />
                            </div>
                            <div className="blog-content">
                                <h3>The Top 2020 Handbag Trends to Know</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog6} alt="Blog post 3" />
                            </div>
                            <div className="blog-content">
                                <h3>The Top 2020 Handbag Trends to Know</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog7} alt="Blog post 3" />
                            </div>
                            <div className="blog-content">
                                <h3>The Top 2020 Handbag Trends to Know</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src={blog8} alt="Blog post 3" />
                            </div>
                            <div className="blog-content">
                                <h3>The Top 2020 Handbag Trends to Know</h3>
                                <p>By Uriel Krajcik in Fashion, Commercial on Mar 28, 2024</p>
                                <p>You should pay more attention when you choose your wallets. There are a lot of them on the market with different designs...</p>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className="blog-sidebar col-lg-4 col-md-12">
                    <div className="search-bar">
                        <Form inline>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Search..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1">
                                    <Search />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </div>
                    <div className="categories mt-4">
                        <h5>Categories</h5>
                        <p>E-commerce</p>
                        <p>Fashion</p>
                        <p>Electronics</p>
                        <p>Commercial</p>
                    </div>
                    <div className="recent-posts mt-4">
                        <h4>Recent Posts</h4>
                        <div className="blog-cate">
                            <img src={blog3} alt="Recent post 1" />
                            <div>
                                <span>Mar 28, 2024 by <a href="#">Uriel Krajcik</a></span>
                                <p>The World Caters to Average People</p>
                            </div>
                        </div>
                       
                        <div className="blog-cate">
                            <img src={blog2} alt="Recent post 2" />
                            <div>
                                <span>Mar 28, 2024 by <a href="#">Uriel Krajcik</a></span>
                                <p>The World Caters to Average People</p>
                            </div>
                        </div>
                        <div className="blog-cate">
                            <img src={blog9} alt="Recent post 3" />
                            <div>
                                <span>Mar 28, 2024 by <a href="#">Uriel Krajcik</a></span>
                                <p>The World Caters to Average People</p>
                            </div>
                        </div>
                    </div>
                    <div className="popular-tags mt-4">
                        <h4>Popular Tags</h4>
                        <div className="tag-buttons">
                            <button className="btn btn-outline-secondary m-1">General</button>
                            <button className="btn btn-outline-secondary m-1">Design</button>
                            <button className="btn btn-outline-secondary m-1">Fashion</button>
                            <button className="btn btn-outline-secondary m-1">Modern</button>
                            <button className="btn btn-outline-secondary m-1">Branding</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
