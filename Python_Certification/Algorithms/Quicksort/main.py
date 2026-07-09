def quick_sort(array):
    if len(array) <= 1:
        return array

    pivot = array[0]

    less = []
    equal = []
    more = []

    for num in array:
        if num > pivot:
            more.append(num)
        elif num < pivot:
            less.append(num)
        else:
            equal.append(num)

    less = quick_sort(less)
    more = quick_sort(more)

    return less + equal + more

if __name__ == "__main__":
    print(quick_sort([20, 3, 14, 1, 5]))