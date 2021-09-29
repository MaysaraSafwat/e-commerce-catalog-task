import React from "react";
import { Card, CardActionArea, CardContent, CardMedia , Typography} from "@material-ui/core"
import RatingComponent from "../Rating";

export default function Product (){
    return (
        <div className="product">
            <Card sx={{ maxWidth: 300 }}>
           <CardActionArea>
             <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
          alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product Name
          </Typography>
          <RatingComponent rating={4}/>
          <p>Price: 40$</p>
           </CardContent>
         </CardActionArea>
        </Card>
            
                 
    </div>
    )
}