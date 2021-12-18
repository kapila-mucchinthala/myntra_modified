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


            <div>
                <div className={Styles.ContactdetailsForm} >
                        <h1>hi</h1>
                </div>

            </div>






        </div> 
    )
}