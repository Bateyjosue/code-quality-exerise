const calculateFibonacci = (number) => {
    if (number <= 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0, 1];

    const fibonaccis = calculateFibonacci(number - 1);
    fibonaccis.push(fibonaccis.at(-1) + fibonaccis.at(-2));
    return fibonaccis;
}
