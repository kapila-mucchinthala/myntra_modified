import { BigDeals } from './ProductsDeals/BiggestDeals';
import { DayDeals } from './ProductsDeals/DealsOfDay';
import { CategoriesBag } from './ProductsDeals/CategoriesBag';
import { ExploreDeals } from './ProductsDeals/ExploreBrands';
import { MyntraLuxe } from './ProductsDeals/MyntraLuxe';
// import { Login } from '../Login/login';
// import { VerifyOtp } from '../Login/VerifyOtp';


export const LandingPage=()=>{
    return (
        <div>
              <DayDeals/>
              <BigDeals/>
              <CategoriesBag/>
              <ExploreDeals/>
              <MyntraLuxe/>
              {/* <Login/>
              <VerifyOtp/> */}
        </div>
    )
}