// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
    if (n <= 1) return n;

    const dp = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

const n = 10; 
const fibonacciNumbers = Array.from({ length: n + 1 }, (_, i) => fibonacci(i));

console.log("Fibonacci numbers:", fibonacciNumbers);
