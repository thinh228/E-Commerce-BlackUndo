import React from "react";
import { Link } from "react-router-dom";
import "./DealTimer.css";

const Deal = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <div className="mainDeal">
        <div className="dealTimer">
          <div className="dealTimerMainContent">
            <div className="dealTimeContent">
              <p>Deal of the Week</p>
              <h3>
                Spring
                <span> Collection</span>
              </h3>
              <div className="dealTimeLink">
                <Link to="/shop" onClick={scrollToTop}>
                  Shop Now
                </Link>
              </div>
            </div>

              </div>
            </div>
          </div>
    </>
  );
};
export default Deal;