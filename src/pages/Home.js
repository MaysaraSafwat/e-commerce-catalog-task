import React from "react";
import Categories from "../components/categoriesComponents/Categories";
import Products from "../components/productsComponents/Products"
import FiltersSideBar from "../components/filtersComponents/FiltersSideBar";


export default function Home (){
    return (
        <div>
            <Categories/>
            <div className="home">
                <FiltersSideBar/>
                <Products/>
            </div>
        </div>
    )
}
