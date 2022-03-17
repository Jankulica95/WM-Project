import logo from "../LogoWM.jpg";
import { links, social } from "./data";
import { BiSearch } from "react-icons/bi";
import { BsHouseDoorFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <div className="nav-toggle">
            <FiAlignJustify />
          </div>
          <div className="header-list">
            <ul className="header-links-s">
              <li>
                <a href="#" id="link-s">
                  <BsHouseDoorFill />
                </a>
              </li>
              <li>
                <a href="#" id="link-s">
                  <AiFillQuestionCircle />
                </a>
              </li>
              <li>
                <a href="#" id="link-s">
                  <FaGraduationCap />
                </a>
              </li>
              <li>
                <a href="#" id="link-s">
                  <IoIosMail />
                </a>
              </li>
            </ul>
          </div>
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
