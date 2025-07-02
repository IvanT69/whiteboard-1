function p5_symmetricDiff(list1, list2) {
    let result = [];
    for (let x of list1) {
        if (!list2.includes(x) && !result.includes(x)) result.push(x);
    }
    for (let x of list2) {
        if (!list1.includes(x) && !result.includes(x)) result.push(x);
    }
    return result;
}
