import Rating from "../Rating";
import Button from "./Button";

export default function RatingFilter({ start, end, onChange, handleClearRatingFilter }) {
  const stars = [];
  for (let i = end; i >= start; i--) stars.push(i);

  const onRatingSelect = (value) => {
    onChange(value);
  };
  const handleClick=()=>{
    handleClearRatingFilter()
  }
  return (
    <>
    <div>
      Select Rating 
    </div>
      {stars.map((i) => (
        <Rating key={`raing-${i}`} rating={i} onRatingSelect={onRatingSelect} onClick={handleClick} />
      ))}
      
      <Button onClick={handleClick}/>
    </>
  );
}
