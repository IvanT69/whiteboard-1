function p9_findPath(graph, start, end, path = []) {
    path.push(start);
    if (start === end) return { exists: true, path };
    if (!graph[start]) return { exists: false, path: [] };
    for (let node of graph[start]) {
        if (!path.includes(node)) {
            const result = p9_findPath(graph, node, end, [...path]);
            if (result.exists) return result;
        }
    }
    return { exists: false, path: [] };
}
