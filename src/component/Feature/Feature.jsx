import PropTypes from "prop-types"
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
      return (
            <div>
                 <p className="flex gap-2 items-center"> <AiFillCheckCircle className="bg-lime-500"></AiFillCheckCircle> {feature}</p> 
            </div>
      );
};


Feature.propTypes={
      feature:PropTypes.string
}


export default Feature;