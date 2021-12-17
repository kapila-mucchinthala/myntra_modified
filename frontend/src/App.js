import { LandingPage } from "./components/Body/LandingPage";
import { Login } from "./components/Login/login";
import { VerifyOtp } from "./components/Login/VerifyOtp";
import { Route, Switch } from 'react-router-dom';
import { Productscreen } from "./components/ProductScreen/Productscreen";

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <Login/> */}
      {/* <VerifyOtp/> */}

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
      </Switch>
    </>
  );
}

export default App;