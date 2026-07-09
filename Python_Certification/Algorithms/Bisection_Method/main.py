def square_root_bisection(target, tolerance = 1e-7, max_iter = 50):

    if target < 0:
        raise ValueError("Square root of negative number is not defined in real numbers")

    if target == 0 or target == 1:
        print(f"The square root of {target} is {target}")
        return target

    low = 0.0
    high = 1 if target < 1 else target
    iterations = 0
    found = False

    while(iterations < max_iter and (high - low) > tolerance):
        mid = (low + high) / 2
        mid_sq = mid ** 2

        if mid_sq == target:
            found = True
            break
        elif mid_sq > target:
            high = mid
        else:
            low = mid

        iterations += 1
    
    if found or (high - low) <= tolerance:
        mid = (low + high) / 2
        print(f"The square root of {target} is approximately {mid}")
        return mid

    print(f"Failed to converge within {max_iter} iterations")
    return None

print(square_root_bisection(0.001))