import { Link } from "react-router-dom"
import "./Address/congrats.css"
export const Congrats=()=>{
    return(
        <>
        <div id="container">
        <div id="bg-circles">
            <div id="circle-1"></div>
            <div id="circle-2"></div>
            <div id="circle-3"></div>
        </div>
        <h3 id="title">Order Placed  🎊</h3>
        <h6 class="congrats-h3"> Tracking Id - 564875B17</h6>
        <p class="conf-text">
        Thank you for your choosing Myntra .Your Payment has been recevied. You should recevie a confirmation email shortly. Click on continue  More Shopping
        </p>
        <Link to="/"><button id="btn-continue" onclick="allcheckout(event) ">Continue</button></Link>
    </div>
        </>
    )
}