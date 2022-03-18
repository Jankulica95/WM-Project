import { links, social } from "./data";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-center">
        <div className="social-container">
          <ul className="footer-social">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer_links-container">
          <ul className="footer-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="arrow-div">
          <AiOutlineArrowUp className="footer-btn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
