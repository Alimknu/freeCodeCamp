def dfs(matrix, node):
    vertices = len(matrix)

    if node < 0 or node > vertices:
        return f"Invalid node number: {node}. Please select a value between 0 and {vertices - 1}."
    
    res = [node]
    stack = [node]
    visited = set()

    while(stack):
        current = stack.pop()
        visited.add(current)

        for n in range(vertices):
            
            if n not in visited and matrix[current][n] >= 1:
                stack.append(n)
                res.append(n)

    return res

if __name__ == "__main__":
    print(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3))