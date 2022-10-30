// 假设0和所有的节点都有来链接,1和2，2＆3 34
graph = [
  // 0 1 2 3 4
  [0, 1, 1, 1, 1],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0],
];

function dijkstra(graph, src) {
  //   节点数量
  const len = graph.length;
  const INF = Number.MAX_SAFE_INTEGER;

  let dist = [];
  let visited = [];
  //距离矩阵和是否走过矩阵
  //   let dist = new Array(len).fill(0).map((v) => new Array(len).fill(INF));
  //   let visited = new Array(len).fill(0).map((v) => new Array(len).fill(false));

  for (let i = 0; i < len; i++) {
    dist[i] = INF;
    visited[i] = false;
  }

  dist[src] = 0;
  let i = 0;
  while (i < len - 1) {
    visited[src] = true;
    let cur = graph[src];
    for (let j = 0; j < len; j++) {
      if (cur[j] !== 0) {
        if (dist[src] + cur[j] < dist[j]) {
          dist[j] = dist[src] + cur[j];
        }
      }
    }
    let min = INF;
    let minIndex = -2;
    for (let i = 0; i < dist.length; i++) {
      if (!visited[i] && dist[i] < min) {
        min = dist[i];
        minIndex = i;
      }
    }
    src = minIndex;
    i++;
  }
  return Math.min(...dist.filter((v) => v !== 0));
}

console.log(dijkstra(graph, 3));
