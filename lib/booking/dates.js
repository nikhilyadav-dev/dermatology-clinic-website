import { clinicSchedule } from "@/data/booking/schedule";

const DAY_NAMES = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function isToday(date, now = new Date()) {
  return getDateKey(date) === getDateKey(now);
}

export function isPastDate(date, now = new Date()) {
  const selectedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return selectedDate < today;
}

export function isWorkingDay(date) {
  return clinicSchedule.workingDays.includes(date.getDay());
}

export function formatDateForDisplay(date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: clinicSchedule.timezone,
  }).format(date);
}

export function formatDateInput(date) {
  return getDateKey(date);
}

export function getMonthLabel(date) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
    timeZone: clinicSchedule.timezone,
  }).format(date);
}

export function getDayName(date) {
  return DAY_NAMES[date.getDay()];
}

export function isHoliday(date) {
  const dateKey = getDateKey(date);

  return clinicSchedule.holidays.includes(dateKey);
}

export function isWithinBookingWindow(date, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + clinicSchedule.bookingWindowDays);

  return date <= maxDate;
}

export function isSelectableDate(date, now = new Date()) {
  if (isPastDate(date, now)) return false;
  if (!isWorkingDay(date)) return false;
  if (isHoliday(date)) return false;
  if (!isWithinBookingWindow(date, now)) return false;

  return true;
}

// export function isSelectableDate(date, now = new Date()) {
//   if (isPastDate(date, now)) {
//     return false;
//   }

//   if (!isWorkingDay(date)) {
//     return false;
//   }

//   return true;
// }

export function isSameMonth(firstDate, secondDate) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth()
  );
}

export function isMonthInPast(monthDate, now = new Date()) {
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const targetMonth = new Date(
    monthDate.getFullYear(),
    monthDate.getMonth(),
    1,
  );

  return targetMonth < currentMonth;
}

export function isMonthBeyondBookingWindow(monthDate, now = new Date()) {
  const maxDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  maxDate.setDate(maxDate.getDate() + clinicSchedule.bookingWindowDays);

  const lastAllowedMonth = new Date(
    maxDate.getFullYear(),
    maxDate.getMonth(),
    1,
  );

  const targetMonth = new Date(
    monthDate.getFullYear(),
    monthDate.getMonth(),
    1,
  );

  return targetMonth > lastAllowedMonth;
}
