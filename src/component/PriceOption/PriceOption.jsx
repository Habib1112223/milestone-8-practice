import PropTypes from "prop-types"
import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
      const {name,price,features} = option;
   
      return (
            <div className="bg-blue-300 my-12 flex flex-col rounded-md">
                  <h2 className="text-center my-8">
                        <span className=" text-6xl">{price}</span>
                        <span className=" text-2xl">/mon</span>
                        <h4 className="text-3xl text-center">{name}</h4>
                  </h2>
                 <div className="pl-6 flex-grow">
                 {
                        features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                  }
                  <button className="mt-12 bg-green-600 w-full py-4 rounded-md font-bold text-white hover:bg-yellow-700 ">Buy Now</button>
                  
                 </div>
            </div>
      );
};

PriceOption.propTypes={
      option:PropTypes.object
}

export default PriceOption;