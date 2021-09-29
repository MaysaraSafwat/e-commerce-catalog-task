import React from "react";
import Rating from '@material-ui/lab/Rating';


export default function RatingComponent ({rating}) {
    console.log(rating)
   return (
        <div className="rating">
            
            <Rating name="read-only" defaultValue={rating} readOnly />
        </div>
    )
}