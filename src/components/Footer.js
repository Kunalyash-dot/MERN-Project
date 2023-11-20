import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <hr />
      <div>
        <footer className="py-2 ms-4">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-6"></div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <p>Quick links</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    className="footerLink"
                    to="/"
                   
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="footerLink" to="/termsandcondition">
                    Terms & Condition
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="footerLink" to="/privacyPolicy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="footerLink" to="/refundPolicy">
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="footerLink" to="/shippingPolicy">
                    Shipping & Delivery Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
            <ul className="nav flex-column">
            <li className="nav-item mb-2"> <p>Address</p></li>
            <li className="nav-item mb-2"><h5>XYZ Pvt. Ltd.</h5></li>
            <li className="nav-item mb-2">   <p>
              xyz block, Ambedkar Nagar, Chennai,
              Tamil Nadu - 600056
            </p></li>
            <li className="nav-item mb-2"> <h5>kunal@gmail.com</h5></li>
            <li className="nav-item mb-2"><h5>+91 12345 67890</h5></li>
           
            </ul>
              </div>
          </div>
          <div className="d-flex justify-content-center py-4 my-4 border-top">
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                <Link
            to="https://twitter.com/"
            target="_blank"
          >
            {" "}
            <img
              src="http://1000logos.net/wp-content/uploads/2017/06/Twitter-symbol.jpg"
              alt=""
              className="footerLogo"
            />
          </Link>
                </li>
                <li className="ms-3">
                <Link
            to="https://www.facebook.com"
            target="_blank"
          >
            {" "}
            <img
              src="http://1.bp.blogspot.com/-OldDdwJyooU/URusSwmX58I/AAAAAAAAACI/CGrjLcColtg/s1600/facebook+logo+5.png"
              alt=""
              className="footerLogo"
              style={{ marginLeft: "10px" }}
            />
          </Link>
                </li>
                <li className="ms-3">
                <Link
            to="https://www.youtube.com/"
            target="_blank"
          >
            {" "}
            <img
              src="http://1000logos.net/wp-content/uploads/2017/05/New-YouTube-logo.jpg"
              alt=""
              className="footerLogo"
              style={{ marginLeft: "10px" }}
            />
          </Link>
                </li>
              </ul>
          </div>
        </footer>

       </div>
       </>
          
           
            
         
       
  );
}
