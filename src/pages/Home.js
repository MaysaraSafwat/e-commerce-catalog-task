import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products"
import FiltersSideBar from "../components/FiltersSideBar";


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
