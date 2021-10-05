import React from "react";
import PriceRange from "./PriceRangeFilter";
import ColorFilter from "./ColorFilter";
import RatingFilter from "./RatingFilter";



export default function FiltersSideBar({onPriceRangeChange , onColorFilterChange,
     products,onRatingSelect, handleClearPriceFilter,
     handleClearColorFilter, handleClearRatingFilter })
{

     return (
        <fieldset className="filters-sidebar">
            <legend>Filters</legend>
            <div className="filter-sideItem">
                <PriceRange 
                onPriceRangeChange={onPriceRangeChange}
                handleClearPriceFilter ={handleClearPriceFilter}
                />
            </div>
            <div className="filter-sideItem">
                <ColorFilter onColorFilterChange={onColorFilterChange} products={products} handleClearColorFilter={handleClearColorFilter}/>
            </div>
            <div className="filter-sideItem">
            <RatingFilter start={1} end={5} onChange={onRatingSelect} handleClearRatingFilter={handleClearRatingFilter} />
            </div>   

        </fieldset>
    )
}