// Create variance for initial cost
const initialCost = -100000;

// Create Discount Rate
// const discountRate = 0.045;
// Create Period
// const period = 5;

// Table arrays
const projectRevenue = [30000, 30000, 30000, 30000, 30000];
const projectCost = [-15000, -15000, -15000, -15000, -15000];

const totalProfit = (arr1, arr2) => {
    let sum = [];
    let discountRate = 0.045;
    let period = [1, 2, 3, 4, 5];

    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        sum.push(arr1[i] + arr2[i]);
    }
    let = sumOfDiscount = [];

    for(let i = 0; i < Math.max(sum.length, period.length); i++) {
        sumOfDiscount.push(sum[i] / Math.pow((1 + discountRate), period[i]));
    }
    return sumOfDiscount = sumOfDiscount.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0) + initialCost;
};
console.log(totalProfit(projectRevenue, projectCost));

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