// HTML Elements
// let numYearsInput;
let projectRevenue;
let projectCost
let initialCost;

document.getElementById("submit").onclick = function () {
  // numYearsInput = parseInt(document.getElementById("numYearsInput").value);
  projectRevenue = [parseInt(document.getElementById("revYear1").value), parseInt(document.getElementById("revYear2").value), parseInt(document.getElementById("revYear3").value), parseInt(document.getElementById("revYear4").value), parseInt(document.getElementById("revYear5").value)];
  projectCost = [parseInt(document.getElementById("costYear1").value), parseInt(document.getElementById("costYear2").value), parseInt(document.getElementById("costYear3").value), parseInt(document.getElementById("costYear4").value), parseInt(document.getElementById("costYear5").value)];
  initialCost = parseInt(document.getElementById("initialCost").value);

  document.getElementById("npvResults").textContent = `NPV is: ${npvFormula(projectRevenue, projectCost)}`;
  document.getElementById("mIrrResults").textContent = `Modified IRR is: ${mIrrFormula(projectRevenue, projectCost)}`;
};

// NPV Formula
const npvFormula = (a, b) => {
  let sum = [];
  let discountRate = 0.045;
  let period = [1, 2, 3, 4, 5];

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    sum.push(a[i] + b[i]);
  }
  let = sumOfDiscount = [];

  for (let i = 0; i < Math.max(sum.length, period.length); i++) {
    sumOfDiscount.push(sum[i] / Math.pow(1 + discountRate, period[i]));
  }
  
  return (sumOfDiscount =
    sumOfDiscount.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) + initialCost);
};

// Modified IRR Formula added
const mIrrFormula = (a, b) => {
  let sum = [];
  let reinvestRate = 0.02;
  let period = [1, 2, 3, 4, 5];
  // let yearCheck = numYearsInput;

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    sum.push(a[i] + b[i]);
  }

  let = sumOfReinvest = [];

  for (let i = 0; i < Math.max(sum.length - 1, period.length - 1); i++) {
    sumOfReinvest.push(sum[i] * Math.pow(1 + reinvestRate, period[i]));
  }

  sumOfReinvest.push(sum.pop());

  sumOfReinvest = (
    sumOfReinvest.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / (initialCost * -1)) ;

let expValue = sumOfReinvest ** (1/5);

  return expValue - 1;
};