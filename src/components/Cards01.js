import { FaGraduationCap } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import "./Cards01.css";

const Cards01 = () => {
  return (
    <>
      <div className="container">
        <h2>WHO WE ARE</h2>
        <article className="container-item">
          <FaGraduationCap className="img" />
          <div className="item-info">
            <header>
              <h5>LOREM IPSUM</h5>
            </header>
            <p className="item-txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              non nihil explicabo, quasi enim dicta.
            </p>
            <button className="btn">Show me</button>
          </div>
        </article>
        <article className="container-item">
          <AiFillLike className="img" />
          <div className="item-info">
            <header>
              <h5>LOREM IPSUM</h5>
            </header>
            <p className="item-txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              non nihil explicabo, quasi enim dicta.
            </p>
            <button className="btn">Show me</button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Cards01;
