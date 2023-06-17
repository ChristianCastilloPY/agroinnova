function pad2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function formatDate(date: Date) {
  return [
    date.getFullYear(),
    pad2Digits(date.getMonth() + 1),
    pad2Digits(date.getDate()),
  ].join("-");
}

export function firstDayOfMonth(date: Date) {
  return [date.getFullYear(), pad2Digits(date.getMonth() + 1), "01"].join("-");
}
