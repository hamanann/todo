export function areDatesSame(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function getDateWithoutTime(date) {
  return date.toJSON().slice(0, 10);
}
