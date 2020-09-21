function fibonacci(num) {
// If num is 0, just return 0 because 0+0=0
// If num is 1, just return 1 because 1+0=1
// Don't waste time doing the math!
    if (num < 2) return num;


// If num is 2 or above, go ahead and do the math.
// Below is an explanation of how this works, using
// an example of fibonacci(2).

// When fibonacci(2) gets run, the return statement
// below evaluates to this:
// return fibonacci(2 - 1) + fibonacci(2 - 2);

// Which, in turn, evaluates to this:
// return fibonacci(1) + fibonacci(0);

// With fibonacci(2) is STILL RUNNING in memory, we 
// now run fibonacci(1).

// fibonacci(1) kicks the value of 1 back up
// to first line of fibonacci() to be stored in num.
// Line 5 evaluates to true, which causes us to
// return the value of 1, and exit the fibonacci(1).

// fibonacci(2) is STILL RUNNING and now looks like this:
// return 1 + fibonacci(0);
// Now it’s time to run fibonacci(0).

// fibonacci(0) kicks the value of 0 back up
// to first line of fibonacci() to be stored in num.
// Line 5 evaluates to true, which causes us to
// return the value of 0, and exit the fibonacci(0).

// fibonacci(2) is STILL RUNNING and now looks like this:
// return 1 + 0;
// We finish running fibonacci(2) by returning the sum of
// 1+ 0, which is 1.
    return fibonacci(num - 1) + fibonacci(num - 2);
}