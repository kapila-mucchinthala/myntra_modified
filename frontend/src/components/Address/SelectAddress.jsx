import { Link } from 'react-router-dom';
import './Selectaddress.css';
 
export const Selectaddress = () => {
    return (
        <div>
            <div className="homeNavbar">
               <div className="navbarDivOne">
                 <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
                </div> 
                <div className='paymentnavbarSection'>
                    <div id='paymentnavbarMid1'>BAG</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid2' className='paymentNavbarcolor'>ADDRESS</div>
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

            <div className='paymentPage'>
                <div>
                    <div className='delivery'>
                        <h5 className='selectH'>Select Delivery Address</h5>
                        <button className='newAddressBtn'>ADD NEW ADDRESS</button>
                    </div>
                    <h5 className='heading'>DEFAULT ADDRESS</h5>
                    <div className='bankOffers'>
                        <div>
                          <div className='bankOffersLine'>
                            <div className='bankOffersLineImg'>
                                {/* <img src='https://www.linkpicture.com/q/1_280.png' alt='' /> */}
                                <input type="radio" />
                            </div>
                            <div>Ranu Ranjan</div>
                            </div>
                            <div className='bankOffersP'>Partap Nagar</div>
                            <div className='bankOffersP'>Sitamarhi, Bihar</div>
                            <p className='bankOffersP'>Mobile: 8770719228</p>
                            <ul className='bankOffersUl'><li>Pay on Delivery available</li></ul>
                            <div className='deliveryBtns'>
                                <button className='delivBtn'>REMOVE</button>
                                <button className='delivBtn'>EDIT</button>
                            </div>
                            
                        </div>    
                    </div>
                    
                    {/* <div className='giftDiv'>                     
                        <div className='giftCardBtn'>+ Add New Address</div>
                    </div> */}
                </div>

                <div className="verticalLine1"></div>
                <div>
                    <div className='priceDetails'>
                        <div className='deliveeyEstimate'>DELIVERY ESTIMATES</div>
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
                            <Link to="/payment"><button style={{padding:"10px 115px",textTransform:"uppercase",backgroundColor:" #FF3F6C ",color:"#ffff",fontFamily:"'Segoe UI', sans-serif",fontWeight:"500",border:"none"}} className='continueBtn'>CONTINUE</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr className='hr4'></hr> */}
            <div className='cardsDiv'>
                <div className='cardFlex'>
                    <img className='cardImg' src='https://www.linkpicture.com/q/1_288.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/2_230.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/3_114.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/4_78.png' alt=''/>
                    <img className='cardImg' src='https://www.linkpicture.com/q/5_72.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/6_65.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/7_39.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/8_36.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/9_35.png' alt='' />
                    <img className='cardImg' src='https://www.linkpicture.com/q/10_41.png' alt=''/>
                </div>
                <div className='needHelp'>Need Help? Contact Us.</div>
            </div>
        </div>
        
    )
}