import React from "react";
import Category from "./Category"
import Grid from "@material-ui/core/Grid"




export default function Categories ({categories, onCategoryClick}){
 
    return (
    <div className="categories">
        <div><div className="categories-heading">Choose one of Our the Categories Below</div></div>
        <Grid container className="grid-container">
        
       {categories &&  categories.map(category => 
        <Grid item xs={6} md={2} key={category.id}>
               <Category category={category} onCategoryClick={onCategoryClick}/>
         </Grid>
          )}
            
       </Grid>
    </div>
    )
}