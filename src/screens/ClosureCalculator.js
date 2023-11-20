import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClosureCalculator() {
  const [closureValue, setClosureValue] = useState({
    outstandingBalance: 0,
    rpaBalance: 0,
    closureDate: "01/01/2023",
    emiAmount: 0,
  });

  let result = document.getElementById("result");
  const closureCalculator = async (e) => {
e.preventDefault();
const outstandingBalance = Number(closureValue.outstandingBalance);
const rpaBalance = Number(closureValue.rpaBalance);
const emiAmount = Number(closureValue.emiAmount);
const closureDate = closureValue.closureDate;

const [day,month,year] = closureDate.split("/").map(Number);

const currentDate = new Date(year,month-1,day);
console.log(currentDate);

const previousMonthEndDate=new Date(year,month-1,day)
previousMonthEndDate.setDate(0);
console.log(previousMonthEndDate);

const timeDifferenceMs = currentDate - previousMonthEndDate;

const numberOfDays =  Math.round(timeDifferenceMs / (24 * 60 * 60 * 1000));

console.log(numberOfDays);

const interest =Math.round( (24/365/100)*outstandingBalance*numberOfDays);
console.log(interest);

const closureAmount = (outstandingBalance+interest) - (rpaBalance+emiAmount)
console.log(closureAmount);

result.innerHTML =`<div className="result">OutStanding Amount:<span>${outstandingBalance.toFixed(0)}</span></div><div className="result">Interest For ${numberOfDays} Days:<span>${interest.toFixed(0)}</span></div><div className="result">Closure Amount:<span>${closureAmount.toFixed(0)}</span></div>`
  };

  const onChange = (event) => {
    setClosureValue({ ...closureValue, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Navbar />

      <div className="emiContainer">
        <h2>Closure Amount Calculator</h2>
        <form onSubmit={closureCalculator}>
          <div className="input-wrapper">
            <div className="title">
              <label> Outstanding Balacne : </label>
              <input
                type="number"
                name="outstandingBalance"
                value={closureValue.outstandingBalance}
                required
                onChange={onChange}
              />
            </div>
            <div className="title">
              <label> RPA Balacne : </label>
              <input
                type="number"
                name="rpaBalance"
                value={closureValue.rpaBalance}
                required
                onChange={onChange}
              />
            </div>
            <div className="title">
              <label> Closure Date : </label>
              <input
                type="text"
                name="closureDate"
                value={closureValue.closureDate}
                required
                onChange={onChange}
              />
            </div>
            <div className="title">
              <label> Collected Amount : </label>
              <input
                type="number"
                name="emiAmount"
                value={closureValue.emiAmount}
                required
                onChange={onChange}
              />
            </div>
          </div>
          <div className="btnContainers">
              <button className="btn btn-primary btnContainer" type="submit">
                Calculate Closure Amount
              </button>
            </div>
        </form>
        <div id="result"></div>
      </div>

      <Footer />
    </div>
  );
}
