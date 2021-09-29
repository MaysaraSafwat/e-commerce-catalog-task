import { Box, Slider } from "@material-ui/core";
import React from "react";

function valuetext(price) {
    return `${price}$`;
  }
export default function PriceRangeFilter() {
    const [price, setPrice] = React.useState([20, 37]);
  
    const handleChange = (event, newPrice) => {
      setPrice(newPrice);
    };
  
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
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    );
  }