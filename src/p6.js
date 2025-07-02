function p6_maxChar(str) {
    const counts = {};
    for (let char of str) {
        if (char.match(/[\w\d]/)) {
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    let maxChar = '', maxCount = 0;
    for (let char in counts) {
        if (counts[char] > maxCount) {
            maxChar = char;
            maxCount = counts[char];
        }
    }
    return { character: maxChar, count: maxCount };
}
