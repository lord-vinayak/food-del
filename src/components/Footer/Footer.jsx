import { assets } from "../../assets/assets";
import "./Footer.css";
import ComesInGoesOutUnderline from "../text/underline-comes-in-goes-out";
import GoesOutComesInUnderline from "../text/underline-goes-out-comes-in";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>
              <div className="location">
                <img src={assets.location} alt="" />
                <a href="https://maps.app.goo.gl/xgS4oM9fhota7kKk6">
                  <GoesOutComesInUnderline label="Besides Hall-2, NIT-DGP" />
                </a>
              </div>
            </li>
            <li>
              <div className="phone">
                <img src={assets.phone} alt="" />
                <p>
                  <GoesOutComesInUnderline label="Mobile - 1234567890"/>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Made with ❤️ by Vinayak</p>
      </div>
    </div>
  );
};

export default Footer;
