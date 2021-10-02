import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";



export default function Products ({selectedCategory , products , selectedPriceRange , selectedColor, selectedRating}) {

  const categorizedProducts = products.filter(product=> product.categoryId === selectedCategory);
  
  console.log(categorizedProducts);
  console.log(selectedColor);
  
  const filteredProducts= categorizedProducts.filter(product => {
     if(selectedPriceRange && !(selectedPriceRange[0] <=  product.price && product.price <= selectedPriceRange[1])){
        return false;
     }
     if(selectedColor && !selectedColor.includes(product.color)){
       return false;
     }
     if(selectedRating && selectedRating !== product.rating){
       return false;
     }
     return true;
  })
  console.log(filteredProducts)

  if(filteredProducts.lenght !== 0){
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
  
 return (
        <div className="products">
        <Grid container>
        
        {categorizedProducts.map(product => 
        <Grid item xs={12} md={6} key={product.id}>
               <Product product={product}/>
         </Grid>)}
         </Grid>
        </div>
    )
}
