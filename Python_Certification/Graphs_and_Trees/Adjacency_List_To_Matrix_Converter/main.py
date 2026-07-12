def adjacency_list_to_matrix(array):
    res = []
    vertices = len(array)

    for vertex in array:
        res.append([0] * vertices)

        for edge in array[vertex]:
            res[vertex][edge] = 1
            

        print(res[vertex])

    return res

if __name__ == "__main__":
    print(adjacency_list_to_matrix({0: [1], 1: [0]}))

