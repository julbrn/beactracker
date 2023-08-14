import React from "react";
import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();
  console.log(year);
  return <div className="footer">Gusnalame © {year}</div>;
}

export default Footer;
