import Styles from "./ProductDeals.module.css";

export const DayDeals = () => {
  return (
    <div className={Styles.DealDiv}>
      <h4 className={Styles.text_banner_title}>Deals Of The Day</h4>
      <div className={Styles.DealsProduct}>
        <img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/13/8a05c974-6db5-4450-bff4-ec0fdc9864331639409850113-Sweatshirts---Jackets.jpg"
          alt=""
          className={Styles.DealsDayProductImage}
          width="251"
          height="374"
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/13/dbb2f311-b565-4ef6-9428-7bd21551e9f01639409850079-Winter-Wear_Women.jpg"
          alt=""
          className={Styles.DealsDayProductImage}
          width="251"
          height="374"
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/13/50401daa-77b4-4582-8471-a3bd722dcc821639409850097-Winter-Wear_Kids.jpg"
          alt=""
          className={Styles.DealsDayProductImage}
          width="251"
          height="374"
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/13/27ae5d0d-6dd7-412c-96e5-afcc942f991e1639409850088-Winter-Wear_Men.jpg"
          alt=""
          className={Styles.DealsDayProductImage}
          width="251"
          height="374"
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/13/7749fb2a-825a-4424-8fa1-ecc9e12574e81639409850120-Gadgets.jpg"
          alt=""
          className={Styles.DealsDayProductImage}
          width="251"
          height="374"
        />
      </div>
    </div>
  );
};
