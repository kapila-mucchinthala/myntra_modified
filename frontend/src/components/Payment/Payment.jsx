import { Link } from 'react-router-dom';
import './payment.css';
 
export const Payment = () => {
    return (
        <div>
            <div className="homeNavbar">
               <div className="navbarDivOne">
                 <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
                </div>
                <div className='paymentnavbarSection'>
                    <div id='paymentnavbarMid1'>BAG</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid2'>ADDRESS</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid3' className='paymentNavbarcolor'>PAYMENT</div>
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
                    <div className='bankOffers'>
                        <div>
                          <div className='bankOffersLine'>
                            <div className='bankOffersLineImg'>
                                <img src='https://www.linkpicture.com/q/1_224.png' alt='' />
                            </div>
                            <div>Bank Offers</div>
                            </div>
                            <p className='bankOffersP'>10% Instant Discount with HSBC Credit cards up to Rs 1,000 on a min spend of Rs  3,500. TCA</p>
                            <div className='showMore'>Show More</div>
                        </div>    
                    </div>
                    <h3 className='heading'>Choose Payment Mode</h3>
                    <div className='paymentTable'>
                        <div className='tableRow'>
                            <div className='paymentTableFlex1'>
                                <img className='creditImg' src='https://www.linkpicture.com/q/1_840.png' alt=''></img>
                                <div>
                                    <div>CASH ON DELIVERY</div>
                                    <div>(CASH/CARD/UPI)</div>
                                </div>
                            </div>
                            <div className='paymentTableFlex2'>       
                                    <img className='creditImg2' src='https://www.linkpicture.com/q/2_222.png' alt=''></img>        
                                    <div className='boxWidth'>CREDIT/DEBIT CARD</div>           
                            </div>
                            <div className='paymentTableFlex2'>
                                <img className='creditImg3' src='https://www.linkpicture.com/q/3_386.png' alt=''></img>
                                <div className='boxWidth'>PHONEPE/GOOGLE PAY/BHIM UPI</div>
                            </div>
                            <div className='paymentTableFlex2'>

                                <img className='creditImg4' src='https://www.linkpicture.com/q/4_287.png' alt=''></img>
                                <div className='boxWidth'>PAYTM/PAYZAPP/ WALLETS</div>
                            </div>
                            <div className='paymentTableFlex2'>
                                <img className='creditImg5' src='https://www.linkpicture.com/q/5_49.png' alt=''></img>
                                <div className='boxWidth'>Net BANKING</div>
                            </div>
                            <div className='paymentTableFlex2'>
                                <img className='creditImg6' src='https://www.linkpicture.com/q/1_841.png' alt=''></img>
                                <div className='boxWidth'>EMI/PAYLATER</div>
                            </div>
                        </div>
                        <div className='paymentTable2'>
                            <p className='table2P'>Pay on delivery (Cash/Card/UPI)</p>
                            <div className='imgInput'></div>
                            <p className='table2P2'>Change above image</p>
                            <input className='table2input' type='text' placeholder='Enter code shown in above image*' />
                            <p className='table2P3'>You can pay via Cash /Card or UPI enabled app at the time of delivery.
                             Ask your delivery executive for these options. </p>
                            <Link to="/thankyou"><button className='paymentBtn'>PLACE ORDER</button></Link>
                        </div>
                    </div>
                    <div className='giftDiv'> 
                            <div className='giftsubDiv1'>
                                <img className='giftsubDiv1img' src='https://www.linkpicture.com/q/1_842.png' alt=''/>
                                <div className='giftsubDiv1P'>Have a Gift Card?</div>
                            </div>
                            <button className='giftCardBtn'>APPLY GIFT CARD</button>
                    </div>
                </div>






                <div className="verticalLine1"></div>
                <div>
                    <div className='priceDetails'>
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
            <hr className='hr4'></hr>
        </div>
        
    )
}