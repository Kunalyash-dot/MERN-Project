import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InsuranceCalculator() {
  const [insValue, setInsValue] = useState({
    insuranceAmount: 0,
  });
  const onChange = (event) => {
    setInsValue({ ...insValue, [event.target.name]: event.target.value });
  };
  let result = document.getElementById("result");
  const insuranceCalculate = (e) => {
    e.preventDefault();

    let Sum_Assured = Number(insValue.insuranceAmount) ;
    // let Interest_value=Number(document.getElementById("Interest").value);
    let Premium_Amount = (Sum_Assured * (3 / 100));
    // console.log(Interest);
    let GST = (Premium_Amount * 0.18);
    let Total_Premium = (Premium_Amount + GST);
    result.innerHTML = `<div>Sum Assured :<span>${Sum_Assured.toFixed(0)}</span></div>
    <div>Premium Amount 3% :<span>${Premium_Amount.toFixed(0)}</span></div>
    <div>GST 18% : <span>${GST.toFixed(0)}</span></div>
    <div>Total Premium :<span>${Total_Premium.toFixed(0)}</span></div>`;

  };

  return (
    <div>
      <Navbar />
      <div className="emiContainer">
        <h2>Insurance Calculator</h2>
        <form onSubmit={insuranceCalculate}>
          <div >
            <div style={{textAlign:'center'}}>
              <label> Insurance Amount : </label>
              <input
              className="mx-4"
                type="number"
                name="insuranceAmount"
                value={insValue.insuranceAmount}
                required
                onChange={onChange}
              />
            </div>
          </div>
     
        <div style={{textAlign:'center'}}>

        <button className="btn btn-primary btnContainer" type="submit">Calculate</button>
        </div>
    <div id="result"></div>
    </form>
      </div>
     <Footer />
    </div>
  );
}
