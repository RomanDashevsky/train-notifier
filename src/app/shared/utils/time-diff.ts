export const getMinutesDiff = (first: string, second: string) => {
  const firstTime = new Date(first).getTime();
  const secondTime = new Date(second).getTime();
  const diff = (firstTime - secondTime) / 60000;

  return Math.round(diff);
};
