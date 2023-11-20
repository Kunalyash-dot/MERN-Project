import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EmiCalculator() {
  const [emiValue, setEmiValue] = useState({
    loanAmount: 100000,
    tenure: 0,
    interest: 24, 
    inputDate: "01/01/2023",
  });
  let result = document.getElementById("result");
  const onChange = (event) => {
    setEmiValue({ ...emiValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loanAmount = Number(emiValue.loanAmount);
    const tenure = Number(emiValue.tenure);
    const interest = Number(emiValue.interest);
    const inputDateStr = emiValue.inputDate;

    const [day, month, year] = inputDateStr.split("/").map(Number);

    //convert into date format
    const inputDate = new Date(year, month - 1, day);

    //used to set month
    inputDate.setMonth(inputDate.getMonth() + 2);
    //used to set month last date
    inputDate.setDate(0);

    // below three line get the date for next month
    const lastDateOfNextMonth = inputDate.getDate();
    const nextMonth = inputDate.getMonth() + 1; // Month in JavaScript Date object is 0-indexed
    const nextYear = inputDate.getFullYear();

    //db_Date & next month date in date format
    let disbursementDate = new Date(year + "-" + month + "-" + day);
    let paymentDate = new Date(
      nextYear + "-" + nextMonth + "-" + lastDateOfNextMonth
    );

    // Calculate the difference in milliseconds between the two dates
    const timeDifferenceMs = paymentDate - disbursementDate;

    // Calculate the number of days by dividing the difference by the number of milliseconds in a day
    const numberOfDays = Math.round(timeDifferenceMs / (24 * 60 * 60 * 1000));

    let effRate = interest / 100 / 365;
    let perDayInterest = Math.round(effRate * loanAmount * numberOfDays);
    let monthlyInterestRate = interest / 100 / 12;
    let monthlyEMI;
    let roundMonthlyEmi;
    let principleAmount;

    if (day >= 1 && day <= 7) {
      principleAmount = loanAmount;
      monthlyEMI =
        (principleAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, tenure)) /
        (Math.pow(1 + monthlyInterestRate, tenure) - 1);
      roundMonthlyEmi = Math.round(monthlyEMI / 10) * 10;
    } else if (day >= 8 && day <= 31) {
      principleAmount = loanAmount + perDayInterest;
      monthlyEMI =
        (principleAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, tenure)) /
        (Math.pow(1 + monthlyInterestRate, tenure) - 1);

      roundMonthlyEmi = Math.round(monthlyEMI / 10) * 10;
    } else {
      // alert("Invalid date.");
    }

    const totalInterest = roundMonthlyEmi * tenure - loanAmount;
    const totalPayment = totalInterest + loanAmount;

    if(tenure === 0){
      alert("Enter Tenure !")
    }
    else{

      result.innerHTML = `<div className="result">EMI Amount : <span>${roundMonthlyEmi.toFixed(
        0
      )}</span></div>
    <div className="result">Total Interest : <span>${totalInterest.toFixed(
      0
    )}</span></div>
    <div className="result">Total Payment : <span>${totalPayment.toFixed(
      0
    )}</span></div>
    `;
    }
 
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className=" emiContainer">
        <h2>EMI Calculator</h2>
          <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
            <div className="title">
              <label> Loan Amount : </label>
              <input
                type="number"
                name="loanAmount"
                value={emiValue.loanAmount}
                required
                onChange={onChange}
              />
            </div>

            <div className="title">
              <label htmlFor="tenure">Loan Tenure : </label>
              <input
                type="number"
                name="tenure"
                value={emiValue.tenure}
                required
                onChange={onChange}
              />
            </div>

            <div className="title">
              <label htmlFor="interest"> Interest Rate : </label>
              <input
                type="number"
                name="interest"
                value={emiValue.interest}
                required
                onChange={onChange}
              />
            </div>

            <div className="title">
              <label htmlFor="inputDate"> DB Date : </label>
              <input
                type="text"
                id="inputDate"
                name="inputDate"
                placeholder="dd/mm/yyyy"
                value={emiValue.inputDate}
                required
                onChange={onChange}
              />
            </div>
            </div >
            <div className="btnContainers">
              <button className="btn btn-primary btnContainer" type="submit">
                Calculate EMI
              </button>
            </div>
          
          </form>

          <div id="result"></div>
        
      </div>
      <Footer></Footer>
    </div>
  );
}
