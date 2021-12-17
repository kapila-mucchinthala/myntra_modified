import Styles from "./login.module.css";

export const VerifyOtp = () => {
  return (
    <div >
      <div className={Styles.loginPage}>
        <div className={Styles.login_card}>
          <div className={Styles.login_card_image}>
            <img
              src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
              alt=""
              width="88"
              height="88"
            />
          </div>
          <div className={Styles.login_form}>
            <div className={Styles.Loginform_title}>
              <p>
                Verify with OTP 
                </p>
              <br />
              <span>Sent to {}</span>
              
            </div>
            <div className={Styles.formInput}>
              <div>
                <div className={Styles.OtpContainer}> 
                <input type="tel"  maxLength="1" data-val="0" autocomplete="off"/>
                <input type="tel"  maxLength="1" data-val="0" autocomplete="off"/>
                <input type="tel"  maxLength="1" data-val="0" autocomplete="off"/>
                <input type="tel"  maxLength="1" data-val="0" autocomplete="off"/>
                  
                  
                </div>
              </div>
            </div>
            
            <div className={Styles.CotinueBtnDiv}>
            RESEND OTP
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
