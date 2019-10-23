export const analyze = (input) => ({
  average: Math.round(input
    .reduce((acumulator, currentValue) => acumulator + currentValue, 0) / input.length),
  min: Math.min(...input),
  max: Math.max(...input),
  length: input.length,
});
