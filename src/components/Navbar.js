import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import logo from "./Images/logo1.png";

export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  localStorage.setItem("temp", "first");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  let data = useCart();

 
  return (
    <div >
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          boxShadow: "0px 10px 50px black",
          filter: "blur(20)",
          width: "100%",
        }}
       
      >
        <div className="container-fluid px-3">
          <Link className="navbar-brand fs-2 fst-italic" to="/">
            <img src={logo} alt="" className="logoSize"  />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <>
                  <li>
                    <Link
                      className="nav-link active fs-5"
                      aria-current="page"
                      to="/myOrder"
                    >
                      My Order
                    </Link>
                  </li>
                  {/* <li
                    class="nav-item dropdown ms-2"
                    style={{ paddingTop: "5px" }}
                  > */}
                    {/* <div className="dropdown">
                      <Link
                        className="btn btn-secondary dropdown-toggle"
                        to="/"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Calculator
                      </Link>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="/emiCalculator">
                            EMI Calculator
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/insuranceCalculator"
                          >
                            Insurance Calculator
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/closureCalculator"
                          >
                            Closure Amount
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                </>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-sucess mx-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white text-sucess mx-1"
                  to="/createuser"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart {"  "}{" "}
                  <span className="badge bg-danger">{data.length}</span>
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
