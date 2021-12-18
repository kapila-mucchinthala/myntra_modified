import '../Payment/payment.css'
import Styles from './Address.module.css'
export const Address = ()=>{
    return(
        <div>
            <div  className="homeNavbar">
               <div className="navbarDivOne">
                 <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
                </div>
                <div className='paymentnavbarSection'>
                    <div id='paymentnavbarMid1'>BAG</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid2' className='paymentNavbarcolor'>ADDRESS</div>
                    <div className='paymentnavbarSecDots'>----------</div>
                    <div id='paymentnavbarMid3' >PAYMENT</div>
                </div>
                <div className='paymentnavbarSection' id='paymentnavbarSectionlastDiv'>
                    <div>
                        <img src='https://www.linkpicture.com/q/1_162.png' alt=''></img>
                    </div>
                    <div>100% SECURE</div>
                </div>
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
    )
}