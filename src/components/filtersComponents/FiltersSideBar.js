import React from "react";
import PriceRange from "./PriceRangeFilter";
import RatingComponent from "../Rating"
import ColorFilter from "./ColorFilter";



export default function FiltersSideBar({onPriceRangeChange , onColorFilterChange, products,onRatingSelect})
{
  
const stars = [];
(
    (arr)=>{
        for(var i=5 ; i>0; i--){
            stars.push(i)
        }
        return stars
    }
)(); 

  
    
     return (
        <fieldset className="filters-sidebar">
            <legend>Filters</legend>
            <div className="filter-sideItem">
                <PriceRange 
                onPriceRangeChange={onPriceRangeChange}
                />
            </div>
            <div className="filter-sideItem">
                <ColorFilter onColorFilterChange={onColorFilterChange} products={products}/>
            </div>
            <div className="filter-sideItem">
                {stars.map( i =>  
                  <RatingComponent rating={i} onRatingSelect={onRatingSelect}/>
               )}
            
            </div>   

        </fieldset>
    )
}