import { BsFillCalculatorFill } from "react-icons/bs";
import { AiFillCloud, AiFillHeart } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import "./Cards02.css";

const Cards02 = () => {
  return (
    <div className="container-wwd">
      <h2>WHAT WE DO</h2>
      <article className="row-one">
        <div className="calculator">
          <BsFillCalculatorFill className="icon" />
        </div>
        <div className="cloud">
          <AiFillCloud className="icon" />
        </div>
      </article>
      <article className="row-two">
        <div className="clock">
          <FiClock className="icon" />
        </div>
        <div className="heart">
          <AiFillHeart className="icon" />
        </div>
      </article>
    </div>
  );
};

export default Cards02;
