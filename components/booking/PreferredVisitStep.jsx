"use client";

import { useMemo, useState } from "react";

// import {
//   formatDateForDisplay,
//   getDateKey,
//   getMonthLabel,
//   isSelectableDate,
// } from "@/lib/booking/dates";

import {
  formatDateForDisplay,
  getDateKey,
  getMonthLabel,
  isMonthBeyondBookingWindow,
  isMonthInPast,
  isSelectableDate,
} from "@/lib/booking/dates";

import {
  formatTimeForDisplay,
  getSelectableTimeSlots,
} from "@/lib/booking/time-slots";

function getCalendarDays(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const days = [];

  // Previous month's empty positions
  for (let i = 0; i < startDay; i += 1) {
    days.push(null);
  }

  for (let day = 1; day <= totalDays; day += 1) {
    days.push(new Date(year, month, day));
  }

  return days;
}

export default function PreferredVisitStep({
  preferredDate,
  preferredTime,
  onChange,
  errors,
}) {
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const now = new Date();

    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const selectedDate = preferredDate
    ? new Date(`${preferredDate}T00:00:00`)
    : null;

  const calendarDays = useMemo(
    () => getCalendarDays(visibleMonth),
    [visibleMonth],
  );

  const timeSlots = useMemo(() => {
    if (!selectedDate) {
      return [];
    }

    return getSelectableTimeSlots(selectedDate);
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    if (!date) {
      return;
    }

    if (!isSelectableDate(date)) {
      return;
    }

    const dateKey = getDateKey(date);

    onChange("preferredDate", dateKey);

    // A previously selected time may not be valid
    // for the newly selected date.
    onChange("preferredTime", "");
  };

  const handlePreviousMonth = () => {
    setVisibleMonth(
      (previous) =>
        new Date(previous.getFullYear(), previous.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setVisibleMonth(
      (previous) =>
        new Date(previous.getFullYear(), previous.getMonth() + 1, 1),
    );
  };

  const now = new Date();

  const previousMonthDisabled = isMonthInPast(
    new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1),
    now,
  );

  const nextMonthDisabled = isMonthBeyondBookingWindow(
    new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1),
    now,
  );

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Preferred Visit</p>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          When would you like to visit?
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          Choose a preferred date and time for your consultation. Our clinic
          team will contact you to confirm your appointment.
        </p>
      </div>

      {/* Calendar */}
      <div className="max-w-xl">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handlePreviousMonth}
            disabled={previousMonthDisabled}
            className="rounded-lg px-3 py-2 text-sm transition hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous month"
          >
            ←
          </button>

          <h3 className="font-semibold">{getMonthLabel(visibleMonth)}</h3>

          <button
            type="button"
            onClick={handleNextMonth}
            disabled={nextMonthDisabled}
            className="rounded-lg px-3 py-2 text-sm transition hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next month"
          >
            →
          </button>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}

          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const selectable = isSelectableDate(date);
            const dateKey = getDateKey(date);
            const selected = dateKey === preferredDate;

            return (
              <button
                key={dateKey}
                type="button"
                disabled={!selectable}
                onClick={() => handleDateSelect(date)}
                aria-label={formatDateForDisplay(date)}
                aria-pressed={selected}
                className={[
                  "aspect-square rounded-xl text-sm transition",
                  selectable
                    ? "hover:bg-primary/10"
                    : "cursor-not-allowed text-muted-foreground/40",
                  selected
                    ? "bg-primary text-primary-foreground hover:bg-primary"
                    : "",
                ].join(" ")}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {errors?.preferredDate && (
        <p className="text-sm text-red-500" role="alert">
          {errors.preferredDate}
        </p>
      )}

      {/* Preferred time */}
      {selectedDate && (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Preferred Time</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Choose a preferred time for your consultation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {timeSlots.map((slot) => {
              const selected = preferredTime === slot;

              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onChange("preferredTime", slot)}
                  aria-pressed={selected}
                  className={[
                    "rounded-xl border px-4 py-3 text-sm font-medium transition",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/50 hover:bg-primary/[0.03]",
                  ].join(" ")}
                >
                  {formatTimeForDisplay(slot)}
                </button>
              );
            })}
          </div>

          {timeSlots.length === 0 && (
            <p className="text-sm text-muted-foreground">
              There are no remaining preferred times today. Please choose
              another date.
            </p>
          )}

          {errors?.preferredTime && (
            <p className="text-sm text-red-500" role="alert">
              {errors.preferredTime}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
