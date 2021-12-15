import { BigDeals } from './ProductsDeals/BiggestDeals';
import { DayDeals } from './ProductsDeals/DealsOfDay';
import { CategoriesBag } from './ProductsDeals/CategoriesBag';
import { ExploreDeals } from './ProductsDeals/ExploreBrands';


export const LandingPage=()=>{
    return (
        <div>
              <DayDeals/>
              <BigDeals/>
              <CategoriesBag/>
              <ExploreDeals/>
        </div>
    )
}