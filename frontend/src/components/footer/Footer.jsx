import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <h2 className="mb-3">ONLINE SHOPPING</h2>
                    <ul class="box">
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Home & Living</a></li>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Studio</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Myntra Insider</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h2 className="mb-3">USEFULL LINKS</h2>
                    <ul class="box">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">T&C</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Track Orders</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Cancellation</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Whitehat</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2 className="mb-3">EXPERIENCE MYNTRA APP ON MOBILE</h2>
                    <img src="/img_app1.png" />
                    <img src="/img_app2.png" />
                    <br />
                    <br />
                    <br />
                    <h2 className="mt-3">KEEP IN TOUCH</h2>
                    <img src="/img_facebook.png" height="24px" width="24px" className="m-1" />
                    <img src="/img_tweet.png" height="24px" width="24px" className="m-1" />
                    <img src="/img_youtube.png" height="24px" width="24px" className="m-1" />
                    <img src="/img_insta.png" height="24px" width="24px" className="m-1" />
                </div>
                <div className="col-md-3">
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <img src="/img_original.png" className="img-fluid" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="">100% ORIGINAL </h5>
                            <p>guarantee for all products at myntra.com</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <img src="/img_30.png" className="img-fluid" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="">Return within 30days</h5>
                            <p>of receiving your order</p>
                        </div>
                    </div>
                </div>
            </div>     
        </footer>
    )
}