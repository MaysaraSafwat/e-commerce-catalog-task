import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";



export default function Products ({selectedCategory , products}) {

  const filteredProducts = products.filter(product=> product.categoryId === selectedCategory);
  
   
    return (
        <div className="products">
        <Grid container>
        
        {filteredProducts.map(product => 
        <Grid item xs={12} md={6} key={product.id}>
               <Product product={product}/>
         </Grid>)}
         </Grid>
        </div>
    )
}