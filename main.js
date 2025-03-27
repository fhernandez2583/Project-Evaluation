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
console.log(revenuePos([-10000, -10000, 5000, -5000, -2000]));

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
console.log(costNegative([10000, -10000, 5000, 5000, -2000]));

// Rename function to initialCost
const initialCostNegative = (cost) => {
  if (cost > 0) {
    return cost * -1;
  } else {
    return cost;
  }
};
console.log(initialCostNegative(-100000));

// Create variance for initial cost
const initialCost = -50000;

// Create Discount Rate
// const discountRate = 0.045;
// Create Period
// const period = 5;

// Table arrays
const projectRevenue = [30000, 30000, 30000, 30000, 30000];
const projectCost = [-15000, -15000, -15000, -15000, -15000];

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

// Create NPV Denominator
// const npvDenominator = (discountRate, period) => {
//     return Math.pow((1 + discountRate), period);
// }
// console.log(npvDenominator(discountRate, period));

// Create Discounted amount
// const discountedCashFlow = (totalProfit, npvDenominator) => {
//     return totalProfit / npvDenominator;
// }
// console.log(discountedCashFlow(totalProfit(projectRevenue, projectCost), npvDenominator(discountRate, period)));

// Create NPV function
// const npv = (initialCost, discountedCashFlow) => {
//     return initialCost + discountedCashFlow;
// }
// console.log(npv(initialCost, discountedCashFlow(totalProfit(projectRevenue, projectCost), npvDenominator(discountRate, period))));

// Need to add metrics for ICE eval
const iceRating = (npv, initialCost, projectCost) => {};
