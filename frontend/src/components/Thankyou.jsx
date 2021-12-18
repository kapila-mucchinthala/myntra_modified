import { Link } from "react-router-dom"

export const ThankYou=()=>{
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <img src="https://cdn.dribbble.com/users/957410/screenshots/3226085/dribbble-gif.gif" className="img-fluid"/>
                </div>
                <div className="col-md-2 offset-md-5">
                    <Link to="/"><button className="btn btn-success btn-lg btn-block">Continue Shopping</button></Link>
                </div>
            </div>
        </div>
    )
}