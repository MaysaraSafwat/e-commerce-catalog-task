import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";



export default function Products ({ products }) {

 return (
        <div className="products">
        <Grid container>
        {products.map(product => 
        <Grid item xs={12} md={6} key={product.id}>
               <Product product={product}/>
         </Grid>)}
         </Grid>
        </div>
    )
}
