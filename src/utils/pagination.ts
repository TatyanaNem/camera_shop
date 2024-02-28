export function getPagesArray (pagesCount: number) {
  const result = [];
  for(let i = 1; i <= pagesCount; i++) {
    result.push(i);
  }
  return result;
}
