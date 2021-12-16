import './homenavbar.css';
import { Link } from 'react-router-dom';

export const HomeNavbar = ()=>{
    return (
        <div className="homeNavbar">
            <div className="navbarDivOne">
                <img className="navbarDivOneLogo" src='https://www.linkpicture.com/q/logo-1_3.png' type="image" alt=''></img>
            </div>
            <div className="navbarDivTwo">       
                <div className='navbarMen'>MEN
                     <div className='navbarMenBlock'>
                        <div>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Topwear</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>T-Shirts</div>
                                <div>Casual Shirts</div>
                                <div>Formal Shirts</div>
                                <div>Sweatshirts</div>
                                <div>Sweaters</div>
                                <div>Jackets</div>
                                <div>Blazers & Coats</div>
                                <div>Suits</div>
                                <div>Rain Jackets</div>
                                </div>
                            </div>
                            <hr className='navbarprodHrLine'></hr>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Indian & Festive Wear</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Kurtas & Kurta Sets</div>
                                <div>Sherwanis</div>
                                <div>Nehru Jackets</div>
                                <div>Dhotis</div>
                                </div>
                            </div>
                            

                        </div>
                        <div>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Bottomwear</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Jeans</div>
                                <div>Casual Trousers</div>
                                <div>Formal Trousers</div>
                                <div>Shorts</div>
                                <div>Track Pants & Joggers</div>
                                </div>
                            </div>
                            <hr className='navbarprodHrLine'></hr>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Innerwear & Sleepwear</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Briefs & Trunks</div>
                                <div>Boxers</div>
                                <div>Vests</div>
                                <div>Sleepwear & Loungewear</div>
                                <div>Thermals</div>
                                </div>
                            </div>
                            <hr className='navbarprodHrLine'></hr>
                            <div className='navbarMenProducts'>
                               <div className='navbarMenProdHeading'>Plus Size</div>
                            </div>
                            
                        </div>
                        <div>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Footwear</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Casual Shoes</div>
                                <div>Sports Shoes</div>
                                <div>Formal Shoes</div>
                                <div>Sneakers</div>
                                <div>Sandals & Floaters</div>
                                <div>Flip Flops</div>
                                <div>Socks</div>
                                </div>
                            
                            </div>
                            <hr className='navbarprodHrLine'></hr>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Personal Care & Grooming</div>
                            </div>
                            
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Sunglasses & Frames</div>
                            </div>
                            
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Watches</div>
                            </div>
                            
                        </div>
                        <div>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'> Sports & Active Wear</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Sports Shoes</div>
                                <div>Sports Sandals</div>
                                <div>Active T-Shirts</div>
                                <div>Track Pants & Shorts</div>
                                <div>Tracksuits</div>
                                <div>Jackets & Sweatshirts</div>
                                <div>Sports Accessories</div>
                                <div>Swimwear</div>
                                </div>
                            
                            </div>
                            <hr className='navbarprodHrLine'></hr>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Gadgets</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Smart Wearables</div>
                                <div>Fitness Gadgets</div>
                                <div>Headphones</div>
                                <div>Speakers</div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'> Fashion Accessories</div>
                                <div className='navbarMenProdHeadingList'>
                                <div>Wallets</div>
                                <div>Belts</div>
                                <div>Perfumes & Body Mists</div>
                                <div>Trimmers</div>
                                <div>Deodorants</div>
                                <div>Ties, Cufflinks & Pocket Squares</div>
                                <div>Accessory Gift Sets</div>
                                <div>Caps & Hats</div>
                                <div>Mufflers, Scarves & Gloves</div>
                                <div>Phone Cases</div>
                                <div>Rings & Wristwear</div>
                                <div>Helmets</div>
                                </div>
                            </div>
                            <hr className='navbarprodHrLine'></hr>

                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Bags & Backpacks</div>
                            </div>
                            
                            <div className='navbarMenProducts'>
                                <div className='navbarMenProdHeading'>Luggages & Trolleys</div>
                            </div>
                        </div>
                     </div>
                </div>


                <div>WOMEN</div>
                <div>KIDS</div>
                <div>HOME & LIVING</div>
                <div>BEAUTY</div>
                <div>STUDIO</div>
            </div>
            
            <div className='navbarDivThreeSubdivOne'>
                <img className="navbarDivThreeImg" src='https://www.linkpicture.com/q/search_8.png' alt="" />
                <input className="navbarDivThreeInput" type='text' placeholder='Search for products, brands and more'/>
            </div>
            <div className="navbarDivThree">
                <div className='navbarDivThreeFlex'>
                    <img src='https://www.linkpicture.com/q/profile_11.png' alt=''></img>
                    <div>Profile</div>
                </div>
                <div className='navbarDivThreeFlex'>
                    <img src='https://www.linkpicture.com/q/whishlist.png' alt=''></img>
                    <div>Whislist</div>
                </div>
                <div className='navbarDivThreeFlex'>
                    <img src='https://www.linkpicture.com/q/bag.png' alt=''></img>
                    <div>Bag</div>
                </div>
            </div>
        </div>
    )
}