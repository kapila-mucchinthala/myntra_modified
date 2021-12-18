import { useState } from 'react';
import styles from './productscreen.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import  Products from "../../db.js";
import { Link } from 'react-router-dom';

export const Productscreen = () => {
    
    const [isShown, setIsShown] = useState(false);

    const [click, setClick] = useState(true);
    const handleclick = () => {
        setClick(!click);
    }

    const [click1, setClick1] = useState(true);
    const handleclick1 = () => {
        setClick1(!click1);
    }

    const [click2, setClick2] = useState(true);
    const handleclick2 = () => {
        setClick2(!click2);
    }

    const [click3, setClick3] = useState(true);
    const handleclick3 = () => {
        setClick3(!click3);
    }

    const [click4, setClick4] = useState(true);
    const handleclick4 = () => {
        setClick4(!click4);
    }

    const [click5, setClick5] = useState(true);
    const handleclick5 = () => {
        setClick5(!click5);
    }

    const [click6, setClick6] = useState(true);
    const handleclick6 = () => {
        setClick6(!click6);
    }
    return (
        <div style={{ backgroungColor: 'whitesmoke' }}>
            <div>
                <p className={styles.para}>Home / Clothing / Sweatshirts / <span className={styles.boldspan}>Sweatshirts For Men</span></p>
                <p className={styles.para1}><span className={styles.boldspan1}>Sweatshirts For Men</span> - 11949 items</p>
            </div>
            <div className={styles.container}>
                <div className={styles.filterdiv}>
                    <div style={{height:'55px'}}>
                        <h4>FILTERS</h4>
                    </div>
                    <div className={styles.branddiv}>
                        <h6>BRAND</h6>
                        <div>
                            <input type='checkbox' id='Roadster' />
                            <label for="Roadster" className={styles.lbl}>Roadster <span>(798)</span></label><br />
                            <input type='checkbox' id='campus'></input>
                            <label for="campus" className={styles.lbl}>Campus Sutra(516)</label><br />
                            <input type='checkbox' id='here'></input>
                            <label for="here" className={styles.lbl}>HERE&NOW(392)</label><br />
                            <input type='checkbox' id='free'></input>
                            <label for="free" className={styles.lbl}>Free Authority(356)</label><br />
                            <input type='checkbox' id='mast'></input>
                            <label for="mast" className={styles.lbl}>Mast & Harbour(340)</label><br />
                            <input type='checkbox' id='puma'></input>
                            <label for="puma" className={styles.lbl}>Puma(325)</label><br />
                            <input type='checkbox' id='fly'></input>
                            <label for="fly" className={styles.lbl}>Flying Machine(283)</label><br />
                            <input type='checkbox' id='wrogn'></input>
                            <label for="wrogn" className={styles.lbl}>WROGN(263)</label><br />
                            <p className={styles.msg}>+293 more</p>
                        </div>
                    </div>
                    <div className={styles.branddiv}>
                        <h6>PRICE</h6>
                        <div>
                            <input type='checkbox' id='low'></input>
                            <label for='low' className={styles.lbl}>Rs. 389 to Rs. 4012(11588)</label><br />
                            <input type='checkbox' id='medium'></input>
                            <label for='medium' className={styles.lbl}>Rs.4012 to Rs. 7675(331)</label><br />
                            <input type='checkbox' id='high'></input>
                            <label for='high' className={styles.lbl}>Rs. 7675 to Rs. 1138(23)</label><br />
                            <input type='checkbox' id='high1'></input>
                            <label for='high1' className={styles.lbl}>Rs. 1138 to Rs. 15001(6)</label><br />
                        </div>
                    </div>
                    <div className={styles.branddiv}>
                        <h6>COLOR</h6>
                        <div>
                            <input type='checkbox' id='blk'></input>
                            {/* <div className={styles.blkc}></div> */}
                            <label for='blk' className={styles.lbl}>Black (2789)</label><br />
                            <input type='checkbox' id='nblu'></input>
                            {/* <div></div> */}
                            <label for='nblu' className={styles.lbl}>Blue (2126)</label><br />
                            <input type='checkbox' id='blu'></input>
                            {/* <div></div> */}
                            <label for='blu' className={styles.lbl}>Blue (1338)</label><br />
                            <input type='checkbox' id='gry'></input>
                            {/* <div></div> */}
                            <label for='gry' className={styles.lbl}>Grey (1110)</label><br />
                            <input type='checkbox' id='olv'></input>
                            {/* <div></div> */}
                            <label for='olv' className={styles.lbl}>Olive (821)</label><br />
                            <input type='checkbox' id='rd'></input>
                            {/* <div></div> */}
                            <label for='rd' className={styles.lbl}>Red (772)</label><br />
                            <input type='checkbox' id='grn'></input>
                            {/* <div></div> */}
                            <label for='grn' className={styles.lbl}>Green (771)</label><br />
                            <p className={styles.msg}>+33 more</p>
                        </div>
                    </div>
                    <div className={styles.branddiv}>
                        <h6>DISCOUNT RANGE</h6>
                        <div>
                            <input type='checkbox' id='ten'></input>
                            <label for='ten' className={styles.lbl}>10% and above</label><br />
                            <input type='checkbox' id='twnty'></input>
                            <label for='twnty' className={styles.lbl}>20% and above</label><br />
                            <input type='checkbox' id='thrty'></input>
                            <label for='thrty' className={styles.lbl}>30% and above</label><br />
                            <input type='checkbox' id='forty'></input>
                            <label for='forty' className={styles.lbl}>40% and above</label><br />
                            <input type='checkbox' id='fifty'></input>
                            <label for='fifty' className={styles.lbl}>50% and above</label><br />
                            <input type='checkbox' id='sixty'></input>
                            <label for='sixty' className={styles.lbl}>60% and above</label><br />
                            <input type='checkbox' id='svnty'></input>
                            <label for='svnty' className={styles.lbl}>70% and above</label><br />
                            <input type='checkbox' id='ety'></input>
                            <label for='ety' className={styles.lbl}>80% and above</label><br />
                        </div>
                    </div>
                </div>
                <div className={styles.proddiv}>
                    <div className={styles.div1}>
                        <div className={styles.selectordiv}>
                            <div className={styles.seldiv1}>
                                <div>
                                    <button onClick={handleclick}>Bundles {!click ? <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                                <div>
                                    <button onClick={handleclick1}>Character {click1 ? <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                                <div>
                                    <button onClick={handleclick2}>Closure {click2 ? <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                                <div>
                                    <button onClick={handleclick3}>Country of Origin {click3 ? <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                                <div>
                                    <button onClick={handleclick4}>Fabric {click4 ? <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                                <div>
                                    <button onClick={handleclick5}>Hood {click5 ? <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                                <div>
                                    <button onClick={handleclick6}>Length {click6 ? <i class="fa fa-angle-down" aria-hidden="true" width='18px'></i> :
                                        <i class="fa fa-angle-up" aria-hidden="true" width='18px'></i>}</button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.div2}>
                        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{ position: 'relative' }}>
                            {!isShown ? <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10381447/2019/8/16/3aaf0f72-0cf4-40ef-a36c-c81e3186c3281565956541245-Campus-Sutra-Men-Sweatshirts-2091565956539708-1.jpg" alt="img" width='100%' display='block' /> :
                                <div>
                                    <AliceCarousel autoPlay autoPlayInterval="500" disableButtonsControls infinite disableDotsControls>
                                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10381447/2019/8/16/3aaf0f72-0cf4-40ef-a36c-c81e3186c3281565956541245-Campus-Sutra-Men-Sweatshirts-2091565956539708-1.jpg" alt="" width='100%' />
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10381447/2019/8/16/d0ea905f-b05b-4838-9f0a-32dd2f19433b1565956541227-Campus-Sutra-Men-Sweatshirts-2091565956539708-2.jpg" alt="" width='100%' />
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10381447/2019/8/16/128f80d8-c789-4269-9f5e-d48e7ef882051565956541209-Campus-Sutra-Men-Sweatshirts-2091565956539708-3.jpg" alt="" width='100%' />
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10381447/2019/8/16/d1f8718f-918c-4a31-b9da-9ee4062b54511565956541191-Campus-Sutra-Men-Sweatshirts-2091565956539708-4.jpg" alt="" width='100%' />
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10381447/2019/8/16/aaf1e3b1-2d19-4efd-9d92-204d1612b5f31565956541174-Campus-Sutra-Men-Sweatshirts-2091565956539708-5.jpg" alt="" width='100%' />
                                    </AliceCarousel>
                                    <div className={styles.whishlist}>
                                        <button><i class="fa fa-heart-o" aria-hidden="true"></i> Whishlist</button>
                                    </div>
                                </div>
                            }
                           <Link to="/productdetail">
                                <div className={styles.detail}>
                                    <h3>Mr Bowerbird</h3>
                                    <h4>Men Floral printed Sweatshirt</h4>
                                    <p>Rs. 2999</p>
                                </div>
                           </Link>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h3>Mr Bowerbird</h3>
                                <h4>Men Floral printed Sweatshirt</h4>
                                <p>Rs. 2999</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h3>Mr Bowerbird</h3>
                                <h4>Men Floral printed Sweatshirt</h4>
                                <p>Rs. 2999</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h3>Mr Bowerbird</h3>
                                <h4>Men Floral printed Sweatshirt</h4>
                                <p>Rs. 2999</p>
                            </div>
                        </div>
                        <div>
                           
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
};