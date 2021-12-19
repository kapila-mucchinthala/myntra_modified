import '../Payment/payment.css';
import Styles from "./Cart.module.css"
import '../Address/Selectaddress.css';
import { Link } from 'react-router-dom';
export const Cart = () => {
    return (
        <>
            <div className="homeNavbar">
                <div className="navbarDivOne">
                    <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
                </div>
                <div className='paymentnavbarSection'>
                    <div id='paymentnavbarMid1' className='paymentNavbarcolor'>BAG</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid2'>ADDRESS</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid3'>PAYMENT</div>
                </div>
                <div className='paymentnavbarSection' id='paymentnavbarSectionlastDiv'>
                    <div>
                        <img src='https://www.linkpicture.com/q/1_162.png' alt=''></img>
                    </div>
                    <div>100% SECURE</div>
                </div>

            </div>
            <hr className="horizontalLine1"></hr>
            <div className={Styles.SaleEnds}>
                <p>Sale Ends <span>00</span> Hrs: <span>33 </span>Min : <span>54</span>Sec</p>
            </div>
            <div className="row">
                <div className='col-md-8'>
                    <img src="./Product_img/part1.png" />
                </div>
                <div className='col-md-4'>
                    <img src="./Product_img/part2.png" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7'>

                </div>
                <div className='col-md-5'>
                    <div className={Styles.PriceDetails}>
                        <div>
                            <div>
                                <div className='priceDetails'>
                                    <div className='deliveeyEstimate'>PRICE DEATILS (1 item)</div>
                                    <div className='estimatedDeliv'>
                                        <img className='estimatedDelivImg' src='https://www.linkpicture.com/q/2_229.png'></img>
                                        <div className='estimLine'>Estimated delivery by <span className='estmatedSpan'>3Dec 2021</span></div>
                                    </div>
                                    <div className='details'>PRICE DETAILS(1 item)</div>
                                    <div className='detailsFlex'>
                                        <div className='totalPrice'>
                                            <div>Total MRP</div>
                                            <div id='discountMRP'>Rs. 759</div>
                                        </div>
                                        <div className='totalPrice'>
                                            <div>Discount on MRP</div>
                                            <div>Rs. 0</div>
                                        </div>
                                        <div className='totalPrice'>
                                            <div>Convinience Fee</div>
                                            <div id='discountMRP'>FREE</div>
                                        </div>
                                        <hr className='hr2'></hr>
                                        <div className='totalPrice'>
                                            <div id='totalPricecolor'>Total Amount</div>
                                            <div id='totalPricecolor'>Rs. 759</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-8'>

                </div>
                <div className='col-md-4 mb-5'>
                   <Link to="/login"><button type="button" className={Styles.order_btn}>Place Order</button></Link>
                </div>
            </div>
        </>
    )
}