import { Foot } from "../Footer/Foot"
import { Footer } from "../Footer/Footer"
import { HomeNavbar } from "../Home_Navbar/HomeNavbar"
import { AllDeals } from "../ProductsDeals/AllDeal"
import {Slider} from "../Slider/Slider"

export const LandingPage=()=>{
    return (
        <>
           <HomeNavbar/>
           <Slider/>
           <AllDeals/>
           <Footer/>
           <Foot/>
       
        </>
    )
}