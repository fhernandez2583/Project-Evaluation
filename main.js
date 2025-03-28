// Find a check to always make cost negative and revenue positive
// Rename function to projectRevenue
const revenuePos = (arr) => {
  let checkedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      checkedArr[i] = arr[i] * -1;
    } else {
      checkedArr[i] = arr[i];
    }
  }
  return checkedArr;
};
// console.log(revenuePos([-10000, -10000, 5000, -5000, -2000]));

// Rename function to projectCost
const costNegative = (arr) => {
  let checkedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      checkedArr[i] = arr[i] * -1;
    } else {
      checkedArr[i] = arr[i];
    }
  }
  return checkedArr;
};
// console.log(costNegative([10000, -10000, 5000, 5000, -2000]));

// Rename function to initialCost
const initialCostNegative = (cost) => {
  if (cost > 0) {
    return cost * -1;
  } else {
    return cost;
  }
};
// console.log(initialCostNegative(-100000));

// Create variance for initial cost
const initialCost = -50000;

// Create Discount Rate
// const discountRate = 0.045;
// Create Period
// const period = 5;

// Table arrays
const projectRevenue = [30000, 30000, 30000, 0, 0];
const projectCost = [-15000, -15000, -15000, 0, 0];
const projectNumYears = 3;

// NPV Formula
const npvFormula = (arr1, arr2) => {
  let sum = [];
  let discountRate = 0.045;
  let period = [1, 2, 3, 4, 5];

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    sum.push(arr1[i] + arr2[i]);
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
console.log(npvFormula(projectRevenue, projectCost));

// Modified IRR Formula added
const mIrrFormula = (arr1, arr2) => {
  let sum = [];
  let reinvestRate = 0.02;
  let period = [1, 2, 3, 4, 5];
  let yearCheck = projectNumYears;

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    sum.push(arr1[i] + arr2[i]);
  }

  let = sumOfReinvest = [];

  for (let i = 0; i < Math.max(sum.length - yearCheck, period.length - yearCheck); i++) {
    sumOfReinvest.push(sum[i] * Math.pow(1 + reinvestRate, period[i]));
  }
  
  console.log(sumOfReinvest);

  sumOfReinvest.push(sum.pop());

console.log(sumOfReinvest);

  sumOfReinvest = (
    sumOfReinvest.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / (initialCost * -1)) ;

let expValue = sumOfReinvest ** (1/projectNumYears);

  return expValue - 1;
};
console.log(mIrrFormula(projectRevenue, projectCost));
// Will revisit formulas when I check input from html