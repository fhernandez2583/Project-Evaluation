// Create variance for initial cost
const initialCost = 100;

// Table arrays
const projectRevenue = [2, 3, 4, 5, 6];
const projectCost = [5, 4, 3, 2, 1];
const totalProfit = (arr1, arr2) => {
    let sum = [];
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        sum.push(arr1[i] + arr2[i]);
    } return sum;
};
console.log(totalProfit(projectRevenue, projectCost));