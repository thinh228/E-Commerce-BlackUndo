import React from "react";
import "./Footer.css";
import logo from "../../Assets/unnamed.jpg";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              <img src={logo} alt="" Z />
            </div>

            <p>195 Đô Đốc Lộc, Hòa Xuân, Cẩm Lệ, TP Đà Nẵng</p>

            <div className="footer_address">
              <strong> thinhtran.22082004.@gmail.com </strong>
              <strong> +84 789-855-029 </strong>
            </div>


          </div>

          <div className="footer_content">
            <h5>Company</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">Career</Link>
                </li>
                <li>
                  <Link to="*">Affilates</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Shop</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/shop">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/shop">Accessories</Link>
                </li>
                <li>
                  <Link to="/shop">Men</Link>
                </li>
                <li>
                  <Link to="/shop">Women</Link>
                </li>
                <li>
                  <Link to="/shop">Shop All</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Help</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/contact">Customer Service</Link>
                </li>
                <li>
                  <Link to="/loginSignUp">My Account</Link>
                </li>
                <li>
                  <Link to="/contact">Find a Store</Link>
                </li>
                <li>
                  <Link to="/terms">Legal & Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">Gift Card</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <h5>Subscribe</h5>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Join</button>
            </form>

            <h6>Secure Payments</h6>
            <div className="paymentIconContainer">
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © 2024 BlackUndo. 

          </p>
          <div className="footerLangCurrency">
            <div className="footerLang">
              <p>Language</p>
              <select name="language" id="language">
                <option value="english">United States | English</option>
                <option value="Hindi">Hindi</option>
                <option value="Germany">Germany</option>
                <option value="French">French</option>
              </select>
            </div>
          
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;