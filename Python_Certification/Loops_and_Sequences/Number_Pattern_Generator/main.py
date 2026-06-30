def number_pattern(n):
    if not (isinstance(n, int)):
        return "Argument must be an integer value."

    if n < 1:
        return "Argument must be an integer greater than 0."

    res = []
    for i in range(1, n+1):
        res.append((str(i)))
    
    return " ".join(res)

print(number_pattern(12))        