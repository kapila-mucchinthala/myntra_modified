import { BigDeals } from "./BiggestDeals"
import { CategoriesBag } from "./CategoriesBag"
import { DayDeals } from "./DealsOfDay"
import { ExploreDeals } from "./ExploreBrands"
import { MyntraLuxe } from "./MyntraLuxe"

export const AllDeals=()=>{
    return(
        <>
        <DayDeals/>
        <BigDeals/>
        <CategoriesBag/>
        <ExploreDeals/>
        <MyntraLuxe/>
        </>
    
    )
}