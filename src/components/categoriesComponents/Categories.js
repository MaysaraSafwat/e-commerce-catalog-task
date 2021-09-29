import React from "react";
import Category from "./Category"
import Grid from "@material-ui/core/Grid"




export default function Categories (){

    return (
    <div className="categories">
       
       <Grid container>
           <Grid item xs={6} md={3}>
               <Category />
           </Grid>
           <Grid item xs={6}  md={3}>
               <Category />
           </Grid>
           <Grid item xs={6}  md={3}>
               <Category />
           </Grid>
           <Grid item xs={6} md={3}>
               <Category />
           </Grid> 

       </Grid>
    </div>
    )
}