import { Footer } from "../Footer/Footer";
import { HomeNavbar } from "../Home_Navbar/HomeNavbar";
import { ProductSuggest } from "./ProductSuggest";
import "./ProductView.css";

export const ProductView = () => {
    return (
        <>
            <HomeNavbar/>
            <div className="row">
                <div className="col-md-11" style={{margin:"auto"}}>
                    <p className="nav_root">Home / 
                        Clothing / 
                        Sweatshirts / 
                        Campus Sutra Sweatshirts / 
                        More by Campus Sutra</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row" style={{ marginLeft: "50px" }}>
                        <div className="col-md-6">
                            <img src="./img_sweater1_a.png" className="img-fluid mt-4" alt="product-img"/>
                        </div>
                        <div className="col-md-6">
                            <img src="./img_sweater1_b.png" className="img-fluid mt-4" alt="product-img" />
                        </div>
                        <div className="col-md-6">
                            <img src="./img_sweater1_c.png" className="img-fluid mt-4" alt="product-img"/>
                        </div>
                        <div className="col-md-6">
                            <img src="./img_sweater1_d.png" className="img-fluid mt-4" alt="product-img"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <p className="brand_p">Campus Sutra</p>
                            <p className="product_p">Men Black & Grey Colourblocked Hooded Sweatshirt</p>
                            <hr />
                            <p><span className="rate">Rs. 759</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <del className="old_rate">Rs. 1999</del>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="offer">(62% off)</span></p>
                            <p className="tax_p">inclusive of all taxes</p>
                            <p>SELECT SIZE <span>SIZE CHART</span></p>
                            <p className="size">
                                <button type="button" class="btn btn-sm">&nbsp;S&nbsp;</button>
                                <button type="button" class="btn btn-sm">M</button>
                                <button type="button" class="btn btn-sm">&nbsp;L&nbsp;</button>
                                <button type="button" class="btn btn-sm">XL</button>
                            </p>
                        </div>
                        <div className="col-md-8">
                            <button type="button" class="btn cart_btn btn-lg">ADD TO CART</button>
                            <button type="button" class="btn wish_btn btn-lg">WISHLIST</button>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-12">
                            <p className="delivery_p">DELIVERY OPTIONS</p>
                        </div>
                        <div class="row">
                            <div class="col-auto">
                                <input type="number" id="inputPassword6" class="form-control" placeholder="Enter Pincode"/>
                            </div>
                            <p className="input_pin mt-2">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        </div>
                        <hr />
                        <div className="col-md-12">
                            <p className="desc_heading">PRODUCT DETAILS</p>
                            <p className="desc_p">Grey and Black colourblocked sweatshirt, has a hood, one pocket, long sleeves, straight</p>
                            <p className="desc_heading">Size & Fit</p>
                            <p className="desc_p">The model (height 6') is wearing a size M</p>
                            <p className="desc_heading">Material & Care</p>
                            <p className="desc_p">100% Cotton<br />Machine-wash</p>
                            <p className="desc_heading">SPECIFICATIONS</p>
                            <p className="desc_p"></p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                                <p className="specifi_h">
                                    Sleeve Length
                                </p>
                                <p className="specifi_p">
                                    Long Sleeves
                                </p>
                                <hr />
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <p className="desc_heading">RATINGS</p>
                            </div>
                            <div className="col-md-6">
                                <p className="rating_text">4.2 <span><i class="fas fa-star"></i></span></p>
                                <p className="specifi_p">9.2k Verified Buyers</p>
                            </div>
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-12 mt-5">
                                <p className="desc_p">Customer Reviews (1963)</p>
                            </div>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-11">
                                    <p className="desc_p">Awesome quality, good looking, warm and perfect fitting, need to take next size of your actual. The only disappointment thing is under hoodie colour not as displayed.</p>
                                    <img src="./review_img (1).png" className="review_img" alt="product-img" />
                                    <img src="./review_img (2).png" className="review_img"alt="product-img" />
                                    <img src="./review_img (3).png" className="review_img"alt="product-img" />
                                    <p className="review_date">Phaneendra  |  18 Nov 2020</p>
                                    <p className=""></p>
                                </div>
                                <hr />
                            </div>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-11">
                                    <p className="desc_p">Awesome quality, good looking, warm and perfect fitting, need to take next size of your actual. The only disappointment thing is under hoodie colour not as displayed.</p>
                                    <img src="./review_img (1).png" className="review_img" alt="product-img"/>
                                    <img src="./review_img (2).png" className="review_img"alt="product-img" />
                                    <img src="./review_img (3).png" className="review_img" alt="product-img"/>
                                    <p className="review_date">Phaneendra  |  18 Nov 2020</p>
                                    <p className=""></p>
                                </div>
                                <hr />
                            </div>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-11">
                                    <p className="desc_p">Awesome quality, good looking, warm and perfect fitting, need to take next size of your actual. The only disappointment thing is under hoodie colour not as displayed.</p>
                                    <img src="./review_img (1).png" className="review_img" alt="product-img"/>
                                    <img src="./review_img (2).png" className="review_img"alt="product-img" />
                                    <img src="./review_img (3).png" className="review_img" alt="product-img"/>
                                    <p className="review_date">Phaneendra  |  18 Nov 2020</p>
                                    <p className=""></p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Suggestion Page */}
                <ProductSuggest />
            </div>
            <Footer />
        </>
    )
}