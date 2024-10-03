export function getNextShiftDay(day: string, date: Date = new Date()): Date {
  const days = new Map([
    ["sun", 0],
    ["mon", 1],
    ["tue", 2],
    ["wed", 3],
    ["thu", 4],
    ["fri", 5],
    ["sat", 6],
  ]);
  const idx = days.get(day.toLowerCase()) ?? 0;
  let then = new Date(date.setHours(0, 0, 0, 0));
  // Set then to day in current week
  then.setDate(then.getDate() - then.getDay() + idx);
  // If then is before today, add 7 days. Otherwise, return then
  return then < date ? new Date(then.setDate(then.getDate() + 7)) : then;
}
