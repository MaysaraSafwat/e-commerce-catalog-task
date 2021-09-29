import React from "react";
import PriceRange from "./PricrRange";
import RatingComponent from "./Rating"
import ColorFilter from "./ColorFilter";

export default function FiltersSideBar(){
    return (
        <div className="filters-sidebar">
            <div className="filter-sideItem">
                <PriceRange />
            </div>
            <div className="filter-sideItem">
                <ColorFilter/>
            </div>
            <div className="filter-sideItem">
              < RatingComponent rating={5}/>
              < RatingComponent rating={4}/>
              < RatingComponent rating={3}/>
              < RatingComponent rating={2}/>
              < RatingComponent rating={2}/>
                
            </div>

        </div>
    )
}