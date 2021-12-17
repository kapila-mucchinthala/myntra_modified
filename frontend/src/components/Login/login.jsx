import Styles from "./login.module.css";

export const Login = () => {
  return (
    <div >
      <div className={Styles.loginPage}>
        <div className={Styles.login_card}>
          <div className={Styles.login_card_image}>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/9/da75002d-5bbd-4e5d-91cb-6cb4f481900c1625769349241-Banner_Hamburger_400.png"
              alt=""
              width="410"
              height="182px"
            />
          </div>
          <div className={Styles.login_form}>
            <div className={Styles.Loginform_title}>
              <p>
                Login <span>or</span> SignUp
              </p>
            </div>
            <div className={Styles.formInput}>
              <div>
                <div
                  style={{
                    border: "1px solid grey",
                    width: "300px",
                    padding: "10px",
                    outline: "0",
                    //  marginRight:"5px",
                  }}
                >
                  +91 |
                  <input
                    style={{
                      border: "none",
                      //  width:"271px"
                      padding: "5px 20px",
                    }}
                    type="tel"
                    placeholder="Mobile Number" maxLength="10"
                  />
                </div>
              </div>
            </div>
            <div className={Styles.formTerms}>
              By continuing, I agree to the{" "}
              <a href="https://www.myntra.com/termsofuse">Terms of Use</a> &{" "}
              <a href="https://www.myntra.com/termsofuse">Privacy Policy</a>
            </div>
            <div className={Styles.CotinueBtnDiv}>
              <button>continue</button>
            </div>
            <div className={Styles.Gethelp}>
              Have trouble logging in ?<span> Get help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
