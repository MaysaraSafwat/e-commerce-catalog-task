import React from "react";
import { useEffect, useState } from 'react'
import { Divider } from "@material-ui/core";
import Categories from "../components/categoriesComponents/Categories";
import Products from "../components/productsComponents/Products"
import FiltersSideBar from "../components/filtersComponents/FiltersSideBar";
import { fetchData} from "../services/api";


export default function Home (){
    const [categories, setCategories] = useState([]);
    const [selectedCategory , setSelectedCategory ] = useState('');
    const [selectedPriceRange , setSelectedPriceRange] = useState(null);
    const [selectedColor , setSelectedColor] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [products, setProducts] = useState([]);



    useEffect(()=>{
     (async () => {
        const res = await fetchData("category");
        setCategories(res)
     })();
    },[]);

   
    const handleClick= async(id)=> {
      setSelectedCategory(id);
      console.log(id);
      const res = await fetchData("product");
      setProducts(res);

    }
    
     const handleChange = (arr)=>{
         setSelectedPriceRange(arr)
         console.log(arr)
     }

     const handleColorChange = (arr) => {
       setSelectedColor(arr)
     }

     const handleSelectedRating=(num)=>{
       setSelectedRating(num)
       console.log(selectedRating)
     }
     
    return (
        <div>
            <Categories categories={categories} onCategoryClick={handleClick}/>
            <Divider/>
            <div className="home">
                <FiltersSideBar
                products={products}
                onPriceRangeChange={handleChange}
                onColorFilterChange={handleColorChange}
                onRatingSelect={handleSelectedRating}
                />
                <Products 
                selectedPriceRange={selectedPriceRange} 
                selectedCategory={selectedCategory}
                selectedColor={selectedColor}
                selectedRating={selectedRating}
                products={products}/>
            </div>
        </div>
    )
}
