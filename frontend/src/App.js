import { LandingPage } from "./components/Body/LandingPage";
import { Login } from "./components/Login/login";
import { VerifyOtp } from "./components/Login/VerifyOtp";
import { Route, Switch } from 'react-router-dom';
import { Productscreen } from "./components/ProductScreen/Productscreen";
import { ProductView } from "./components/ProductViewPage/ProductView";
import { Address } from "./components/Address/Address";
import { Selectaddress } from "./components/Address/SelectAddress";
import { Payment } from "./components/Payment/Payment";
import { ThankYou } from "./components/Thankyou";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/otp'>
          <VerifyOtp />
        </Route>
        <Route path='/sweatshirt'>
          <Productscreen />
        </Route>
        <Route path="/productdetail">
          <ProductView/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/address">
            <Address/>
        </Route>
        <Route path="/selectaddress">
            <Selectaddress/>
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route path="/thankyou">
          <ThankYou/>
        </Route>
      </Switch>
    </>
  );
}

export default App;