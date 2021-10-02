import React from "react";
import { Card, CardActionArea, CardContent, CardMedia , Typography} from "@material-ui/core"
import RatingComponent from "../Rating";

export default function Product ({product}){
    return (
        <div className="product">
            <Card sx={{ maxWidth: 300 }}>
           <CardActionArea>
             <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <RatingComponent rating={product.rating}/>
          <p>Price: {product.price}$</p>
           </CardContent>
         </CardActionArea>
        </Card>
            
                 
    </div>
    )
}