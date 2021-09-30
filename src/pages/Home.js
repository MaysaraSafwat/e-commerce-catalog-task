import React from "react";
import { useEffect, useState } from 'react'
import Categories from "../components/categoriesComponents/Categories";
import Products from "../components/productsComponents/Products"
import FiltersSideBar from "../components/filtersComponents/FiltersSideBar";
import axios from "axios";


export default function Home (){
    const [categories, setCategories] = useState([]);
    const [selectedCategory , setSelectedCategory ] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchCategories = async ()=>{
          const res = await axios.get("http://test-api.edfa3ly.io/category")
          setCategories(res.data);
        }
        fetchCategories();
        
      },[]);

      const handleClick = async (id)=>{
          setSelectedCategory(id);
          console.log(id)
          const res = await axios.get("http://test-api.edfa3ly.io/product")
          setProducts(res.data);
          
     }
     
    return (
        <div>
            <Categories categories={categories} onCategoryClick={handleClick}/>
            <div className="home">
                <FiltersSideBar/>
                <Products selectedCategory={selectedCategory} products={products}/>
            </div>
        </div>
    )
}
