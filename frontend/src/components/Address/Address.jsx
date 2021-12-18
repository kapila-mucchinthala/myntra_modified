<<<<<<< HEAD
import './address.css';
 
export const Address = () => {
    return (
        <div>
            <div className="homeNavbar">
               <div className="navbarDivOne">
                 <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
                </div> 
=======
import '../Payment/payment.css'
import Styles from './Address.module.css'
export const Address = ()=>{
    return(
        <div>
            <div  className="homeNavbar">
               <div className="navbarDivOne">
                 <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
                </div>
>>>>>>> 4fab9160685bef4b47a6f074165eed1624a97135
                <div className='paymentnavbarSection'>
                    <div id='paymentnavbarMid1'>BAG</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid2' className='paymentNavbarcolor'>ADDRESS</div>
                    <div className='paymentnavbarSecDots'>----------</div>
<<<<<<< HEAD
                    <div id='paymentnavbarMid3'>PAYMENT</div>
=======
                    <div id='paymentnavbarMid3' >PAYMENT</div>
>>>>>>> 4fab9160685bef4b47a6f074165eed1624a97135
                </div>
                <div className='paymentnavbarSection' id='paymentnavbarSectionlastDiv'>
                    <div>
                        <img src='https://www.linkpicture.com/q/1_162.png' alt=''></img>
                    </div>
                    <div>100% SECURE</div>
                </div>
<<<<<<< HEAD
                
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
                                <img src='https://www.linkpicture.com/q/1_280.png' alt='' />
                            </div>
                            <div>Rahul Raj</div>
                            </div>
                            <div className='bankOffersP'>C-48, Noida Sector 91</div>
                            <div className='bankOffersP'>Noida, Uttar Pradesh</div>
                            <p className='bankOffersP'>Mobile: 8799094251</p>
                            <ul className='bankOffersUl'><li>Pay on Delivery available</li></ul>
                            <div className='deliveryBtns'>
                                <button className='delivBtn'>REMOVE</button>
                                <button className='delivBtn'>EDIT</button>
                            </div>
                            
                        </div>    
                    </div>
                    
                    <div className='giftDiv'>                     
                        <div className='giftCardBtn'>+ Add New Address</div>
                    </div>
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
                                <div id='discountMRP'>Rs. 780</div>
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
                                <div id='totalPricecolor'>Rs. 780</div>
                            </div>
                            <button className='continueBtn'>CONTINUE</button>
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
        
=======
            </div> 
            
           <div className={Styles.SaleEnds}>
               <p>Sale Ends <span>00</span> Hrs: <span>33 </span>Min : <span>54</span>Sec</p>
           </div>


            <div className={Styles.AddressContainer}>
                <div className={Styles.ContactdetailsForm} >
                        <div>
                           <label  htmlFor="" > Contact details</label>
                        </div>
                        <form>
                            <input type="text" placeholder='Name*' required/>
                            <br /><br />
                            <input type="text" placeholder='Mobile No* ' />
                            <br /><br />
                            <label htmlFor="">Address</label><br />
                            <input type="text"  placeholder='Pin code*' required/><br /> <br />
                            <input type="text" placeholder='Address (House No. Building Street,Area)*' required /><br /> <br />
                            <input type="text" placeholder='Locality / Town*'/><br /><br />
                            <div className={Styles.CityState}>
                            <input type="text" placeholder='City / District*' required/>
                            <input type="text" placeholder='State*' required />
                            </div><br />
                           
                            <label htmlFor="">Save Address</label>

                           <div className={Styles.HomeWorkbtn}>
                            <button>Home</button>
                            <button>Work</button><br />
                           </div>
                        
                            <div className={Styles.Checkbox}>
                            <input type="checkbox"/>
                            <label htmlFor=""> Make this my default address</label>
                            </div><br />
                            
                           

                            <button className={Styles.Addressbtn} type='submit'>Add Address</button>
                        </form>
                </div>
                <div className={Styles.PriceDetails}>
                   
                </div>
            </div>






        </div> 
>>>>>>> 4fab9160685bef4b47a6f074165eed1624a97135
    )
}