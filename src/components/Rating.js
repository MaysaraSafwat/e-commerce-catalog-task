import React from "react";
import Rating from '@material-ui/lab/Rating';


export default function RatingComponent ({rating , onRatingSelect}) {
   const handleClick = ()=>{
    console.log(rating)
    onRatingSelect(rating)
}

 return (
        <div className="rating">
            
            <Rating 
             name="simple-controlled"
             value={rating}
             onClick={handleClick}
             />
        </div>
    )
}