import React from "react";
import Category from "./Category"



export default function Categories ({categories, onCategoryClick}){
 
    return (
    <div className="categories">
        <div><div className="categories-heading">Choose one of Our the Categories Below</div></div>
        <ul className="grid-container">
        {categories &&  categories.map(category => 
        <li className="grid-item"  key={category.id}>
               <Category category={category} onCategoryClick={onCategoryClick}/>
         </li>
          )}
       </ul>
    </div>
    )
}