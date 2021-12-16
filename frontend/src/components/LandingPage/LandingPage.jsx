import { BigDeals } from './ProductsDeals/BiggestDeals';
import { DayDeals } from './ProductsDeals/DealsOfDay';
import { CategoriesBag } from './ProductsDeals/CategoriesBag';
import { ExploreDeals } from './ProductsDeals/ExploreBrands';
import { MyntraLuxe } from './ProductsDeals/MyntraLuxe';


export const LandingPage=()=>{
    return (
        <div>
              <DayDeals/>
              <BigDeals/>
              <CategoriesBag/>
              <ExploreDeals/>
              <MyntraLuxe/>
        </div>
    )
}