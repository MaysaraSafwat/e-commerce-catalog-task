import React from "react";



export default function Category ({category, onCategoryClick}){
    
   
    return (
        <div className="category" onClick={()=>{
            onCategoryClick(category.id)
        }}>
            <img  src={category.image}
            alt="name"
            />
            <p>{category.name}</p>

    </div>
    )
}
