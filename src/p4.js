function p4_intersection(list1, list2) {
    let result = [];
    for (let i of list1) {
        for (let j of list2) {
            if (i === j && !result.includes(i)) {
                result.push(i);
            }
        }
    }
    return result;
}
