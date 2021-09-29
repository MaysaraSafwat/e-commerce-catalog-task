import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product"


export default function Products () {
    return (
        <div className="products">
        <Grid container>
        <Grid item xs={12} md={6}>
          <Product />
        </Grid>
        <Grid item xs={12}  md={6}>
         <Product />
        </Grid>
     </Grid>
        </div>
    )
}