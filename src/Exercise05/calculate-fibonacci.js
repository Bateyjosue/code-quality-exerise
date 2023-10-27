const calculateFibonacci = (number) => {
    if (number <= 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0, 1];

    const fibonacciSeries = calculateFibonacci(number - 1);
    fibonacciSeries.push(fibonacciSeries.at(-1) + fibonacciSeries.at(-2));
    return fibonacciSeries;
}
