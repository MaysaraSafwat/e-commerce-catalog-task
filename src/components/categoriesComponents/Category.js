import React from "react";



export default function Category ({category, onCategoryClick}){
    
   
    return (
        <div className="category" onClick={()=>{
            onCategoryClick(category.id)
        }}>
            
          <figure>
            <img  src={category.image}
            alt="name"
            />
         </figure>  
         
            <p>{category.name}</p>

    </div>
    )
}
