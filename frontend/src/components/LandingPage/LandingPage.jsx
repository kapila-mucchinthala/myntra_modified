import { BigDeals } from './ProductsDeals/BiggestDeals';
import { DayDeals } from './ProductsDeals/DealsOfDay';
import { CategoriesBag } from './ProductsDeals/CategoriesBag';


export const LandingPage=()=>{
    return (
        <div>
              <DayDeals/>
              <BigDeals/>
              <CategoriesBag/>
        </div>
    )
}