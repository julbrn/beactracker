import "./Footer.css";
import Box from '@mui/material/Box';

function Footer() {
  let year = new Date().getFullYear();
  return <Box className="footer" sx={{ fontSize: 12 }}>Gusnalame © {year}</Box>;
}

export default Footer;
