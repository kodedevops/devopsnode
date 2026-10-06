// Count subset sum
function subsetSum(arr, target) {
    let m = arr.length;

    // let dp = new Array(m+1).fill(0).map(item => new Array(target+1).fill(0));
    let dp = Array.from({length: m +1}, () => new Array(target+1).fill(0));
    dp[0][0] = 1;
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }


    for (let i=1; i<=m; i++) {
        for (let sum=1; sum<=target; sum++) {
            dp[i][sum] = dp[i-1][sum];

            if (arr[i-1] <= sum) {
                dp[i][sum] = dp[i][sum] + dp[i-1][sum-arr[i-1]];
            }
        }
    }

    return dp[m][target];
}

// Example usage:
let arr = [2, 3, 5, 6, 8, 10];
let target = 10;
let result = subsetSum(arr, target);
console.log(`Number of subsets with sum ${target}:`, result); // Output: Number of subsets with sum 10: 3