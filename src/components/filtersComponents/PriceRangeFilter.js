import { Box, Slider } from "@material-ui/core";
import React from "react";
import Button from "./Button";

function valuetext(price) {
    return `${price}$`;
  }


  const prices= [
    {
      value: 0,
      scaledValue: 100
    },
    {
      value: 10,
      scaledValue: 200
    },
    {
      value: 20,
      scaledValue: 300
    },
    {
      value: 30,
      scaledValue: 400
    },
    {
      value:40,
      scaledValue: 500
    },
    {
      value: 50,
      scaledValue: 600
    },
    {
      value: 60,
      scaledValue: 700
    },
    {
      value: 70,
      scaledValue: 800
     
    },
    {
      value: 80,
      scaledValue: 900
     
    },
    {
      value: 90,
      scaledValue: 1000
     
    }
  ];
  
  const scaleValues = (valueArray) => {
    return [scale(valueArray[0]), scale(valueArray[1])];
  };
  const scale = (value) => {
    if (value === undefined) {
      return undefined;
    }
    const previousMarkIndex = Math.floor(value / 10);
    const previousMark = prices[previousMarkIndex];
    const remainder = value % 10;
    if (remainder === 0) {
      return previousMark.scaledValue;
    }
    const nextMark = prices[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) /10;
    return remainder * increment + previousMark.scaledValue;
  };




export default function PriceRangeFilter({onPriceRangeChange, handleClearPriceFilter}) {
    const [price, setPrice] = React.useState([1, 50]);
  
    const handleChange = (event, newPrice) => {
      setPrice(newPrice);
      onPriceRangeChange(price);
      
    };
    const clearFilter = ()=>{
      handleClearPriceFilter()
    }
   
    return (
      <Box sx={{ width: 200 }}>
          <p>Price Range</p>
          <div className="flex-container">
              <p className="price-range">From : {price[0]}$ </p>
              <p className="price-range">To : {price[1]}$</p>
          </div>
        <Slider
          getAriaLabel={() => 'Price Range'}
          value={price}
          onChange={handleChange}
          scale={scaleValues}
          min={0}
          step={1}
          max={1000}
          range={prices}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
          <Button clearFilter={clearFilter}/>
        </Box>
    );
  }