import React from "react";
import Category from "./Category"



export default function Categories ({categories, onCategoryClick}){
 
    return (
    <div className="categories">
        <div><div className="categories-heading">Choose one of Our the Categories Below</div></div>
        <div className="grid-container">
        {categories &&  categories.map(category => 
        <div className="grid-item"  key={category.id}>
               <Category category={category} onCategoryClick={onCategoryClick}/>
         </div>
          )}
       </div>
    </div>
    )
}