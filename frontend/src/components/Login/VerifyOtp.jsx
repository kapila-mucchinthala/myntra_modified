import { Link } from "react-router-dom";
import Styles from "./login.module.css";

export const VerifyOtp = () => {
  return (
    <div>
      <div className={Styles.loginPage}>
        <div className={Styles.login_card}>
          <div style={{padding:"10px"}} className={Styles.Verifiction_form}>
            <div >
              <img
                src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
                alt="otpImg"
                width="90"
                height="90"
              />
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={Styles.Loginform_title}
            >
              <p>Verify with OTP</p>
             
              <h4 style={{fontSize:"14px",fontWeigth:"400",opacity:"0.7" }} >Sent to 8770719228</h4>
            </div>
            <div className={Styles.formInput}>
              <div>
                <div className={Styles.OtpContainer}>
                  <input
                    type="tel"
                    maxLength="1"
                    data-val="0"
                    autocomplete="off"
                  />
                  <input
                    type="tel"
                    maxLength="1"
                    data-val="0"
                    autocomplete="off"
                  />
                  <input
                    type="tel"
                    maxLength="1"
                    data-val="0"
                    autocomplete="off"
                  />
                  <input
                    type="tel"
                    maxLength="1"
                    data-val="0"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>

            <div className={Styles.Gethelp}>
              <span>RESEND OTP</span>
            </div>
            <div className={Styles.CotinueBtnDiv}>
            <div className={Styles.CotinueBtnDiv}>
              <Link to="/address"><button>continue</button></Link>
            </div>
            </div>
            <div className={Styles.Gethelp}>
              Log in using<span> Password</span>
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
