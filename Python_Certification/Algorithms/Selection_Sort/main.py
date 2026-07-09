def selection_sort(array):
    for i in range(len(array)):
        small = array[i]
        minIndex = i
        for j in range(i, len(array)):
            if (array[j] < small):
                small = array[j]
                minIndex = j
        
        if i == minIndex:
            continue

        temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp

    return array

if __name__ == "__main__":
    print(selection_sort([5, 16, 99, 12, 567, 23, 15, 72, 3]))