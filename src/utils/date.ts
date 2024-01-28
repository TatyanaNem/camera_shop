export function formatDate (date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('ru-RU', {month:'long',day:'2-digit'});
}

export function compareDates (a: string, b: string): number {
  return a > b ? -1 : 1;
}
