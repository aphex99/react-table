export const loaderDelay = (start: number, duration = 1500) => {
  const elapsed = Date.now() - start;
  const remaining = Math.max(duration - elapsed, 0);
  return new Promise(resolve => setTimeout(resolve, remaining));
};