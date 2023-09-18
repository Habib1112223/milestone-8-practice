import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const [priceOption,setPriceOption]= useState([])
    
useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data => setPriceOption(data))

},[])

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {
          priceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;