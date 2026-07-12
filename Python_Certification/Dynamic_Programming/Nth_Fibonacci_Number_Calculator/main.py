def fibonacci(n):
    sequence = [0, 1]

    if n <= 1:
        return n

    for i in range(2, n+1):
        sequence.append(sequence[i - 1] + sequence[i - 2])

    return sequence[n]

if __name__ == "__main__":
    print(fibonacci(2))
    