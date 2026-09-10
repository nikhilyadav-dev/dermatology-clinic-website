import { clinicSchedule } from "@/data/booking/schedule";
import { isToday } from "./dates";

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}`;
}

export function generateTimeSlots() {
  const openingMinutes = timeToMinutes(clinicSchedule.openingTime);

  const closingMinutes = timeToMinutes(clinicSchedule.closingTime);

  const slots = [];

  for (
    let minutes = openingMinutes;
    minutes + clinicSchedule.slotDurationMinutes <= closingMinutes;
    minutes += clinicSchedule.slotDurationMinutes
  ) {
    slots.push(minutesToTime(minutes));
  }

  return slots;
}

export function getSelectableTimeSlots(selectedDate, now = new Date()) {
  const allSlots = generateTimeSlots();

  if (!isToday(selectedDate, now)) {
    return allSlots;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return allSlots.filter((slot) => {
    return timeToMinutes(slot) > currentMinutes;
  });
}

export function formatTimeForDisplay(time) {
  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}
