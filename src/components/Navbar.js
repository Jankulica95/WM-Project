import logo from "../LogoWM.jpg";
import { links, social } from "./data";
import { BiSearch } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle">meni ikonica</button>
        </div>
        <div className="links-container">
          <ul className="links">
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
        <div className="search-div">
          <button className="search-btn">
            <BiSearch />
          </button>
        </div>
      </div>
      <div className="gradient-div"></div>
    </nav>
  );
};

export default Navbar;
