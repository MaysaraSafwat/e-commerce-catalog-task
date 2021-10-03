import React from "react";
import { useEffect, useState } from 'react'
import { Divider } from "@material-ui/core";
import Categories from "../components/categoriesComponents/Categories";
import Products from "../components/productsComponents/Products"
import FiltersSideBar from "../components/filtersComponents/FiltersSideBar";
import { fetchCategoriesData, fetchData} from "../services/api";


export default function Home (){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [appliedFilter, setAppliedFilter] = useState({});


    useEffect(()=>{
     (async () => {
        const res = await fetchCategoriesData("category");
        setCategories(res)
     })();
    },[]);

    useEffect(() => { 
      (async () => {
        const filters = Object.values(appliedFilter).join("&");
        const res = await fetchData(filters);
        setProducts(res);
      })();
    }, [appliedFilter]);

    const handleCategoryClick
     = (id) => {
      setAppliedFilter({
        ...appliedFilter,
        category: `categoryId=${id}`,
      });
    };

    const handlePriceRangeChange = (arr) => {
      setAppliedFilter({
        ...appliedFilter,
        price: `price_gte=${arr[0]}&price_lte${arr[1]}`,
      });
    };
    
    const handleColorChange = (arr) => {
      if (arr.length) {
        let colorsAsString = arr.map((color) => `color=${color}`);
        setAppliedFilter({
          ...appliedFilter,
          color: colorsAsString.join("&"),
        });
      } else {
        let newFilter = { ...appliedFilter };
        delete newFilter.color;
        setAppliedFilter(newFilter);
      }
    };

    const handleSelectedRating = (num) => {
      setAppliedFilter({
        ...appliedFilter,
        rating: `rating=${num}`,
      });
    };
    const handleClearPriceFilter =()=>{
      let newFilter = { ...appliedFilter };
      delete newFilter.price
     setAppliedFilter(newFilter);
    }
    const handleClearColorFilter =()=>{
      let newFilter = { ...appliedFilter };
      delete newFilter.color
      setAppliedFilter(newFilter);
    }
    const handleClearRatingFilter =()=>{
      let newFilter = { ...appliedFilter };
      delete newFilter.rating
      setAppliedFilter(newFilter);
    }
  
return (
        <div>
            <Categories categories={categories} onCategoryClick={handleCategoryClick}/>
            <Divider/>
            <div className="home">
                <FiltersSideBar
                products={products}
                onPriceRangeChange={handlePriceRangeChange}
                onColorFilterChange={handleColorChange}
                onRatingSelect={handleSelectedRating}
                onClearFilter={handleClearPriceFilter }
                handleClearColorFilter={handleClearColorFilter}
                handleClearRatingFilter={handleClearRatingFilter}
                />
                <Products 
                products={products}/>
            </div>
        </div>
    )
}
