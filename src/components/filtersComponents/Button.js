import React from "react";

export default function Button (props){
return (
    <div onClick={()=> props.clearFilter()}>
        <button className="clear"> 
        <i class="fas fa-times"></i>Clear</button>
        </div>
)
}