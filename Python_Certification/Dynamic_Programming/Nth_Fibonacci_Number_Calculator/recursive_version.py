def fibonacci(n, memo = {}):
    if n <= 1:
        return n

    if n in memo:
        return memo[n]

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

    return memo[n]

if __name__ == "__main__":
    print(fibonacci(7))
    