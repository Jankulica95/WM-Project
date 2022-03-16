import Image from "../Nikola ikonica.jpg";

const SlideItem = () => {
  return (
    <>
      <div className="slide-container">
        <article className="article-item">
          <img src={Image} alt="Image" className="img-component" />
          <div className="slide-info">
            <p className="slide-txt">LOREM IPSUM DOLOR SIT</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default SlideItem;
