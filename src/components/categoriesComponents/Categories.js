import React from "react";
import Category from "./Category"
import Grid from "@material-ui/core/Grid"




export default function Categories ({categories, onCategoryClick}){
 
    return (
    <div className="categories">
        <div><h4>Choose one of the categories below</h4></div>
        <Grid container>
        
        {categories.map(category => 
        <Grid item xs={6} md={2} key={category.id}>
               <Category category={category} onCategoryClick={onCategoryClick}/>
         </Grid>
          )}
            
       </Grid>
    </div>
    )
}