function p3_fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const seq = p3_fibonacci(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}
