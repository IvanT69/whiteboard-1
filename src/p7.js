function p7_squareRoot(x) {
    if (x < 0) return -1;
    let i = 0;
    while (i * i <= x) {
        if (i * i === x) return i;
        i++;
    }
    return -1;
}
