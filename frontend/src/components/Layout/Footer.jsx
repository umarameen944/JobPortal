import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By umarameen.</div>
      <div>
        <Link to={"/"} >
          <FaFacebookF />
        </Link>
        <Link to={"/"} >
          <FaYoutube />
        </Link>
        <Link to={"https://linkedin.com/in/umarameen"} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
