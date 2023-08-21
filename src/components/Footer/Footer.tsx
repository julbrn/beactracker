import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();
  return <div className="footer">Gusnalame © {year}</div>;
}

export default Footer;
