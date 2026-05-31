function dfs(graph, root) {
  const stack = [root];
  const visited = new Array(graph.length).fill(false);
  visited[root] = true;
  const reachable = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!reachable.includes(node)) {
      reachable.push(node);
    }

    for (let i = graph[node].length - 1; i >= 0; i--) {
      if (graph[node][i] && !visited[i]) {
        visited[i] = true;
        stack.push(i);
      }
    }
  }

  return reachable;
}

console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ],
    1,
  ),
);
