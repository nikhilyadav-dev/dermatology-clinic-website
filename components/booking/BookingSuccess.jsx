import { formatDateForDisplay } from "@/lib/booking/dates";
import { formatTimeForDisplay } from "@/lib/booking/time-slots";

export default function BookingSuccess({ data }) {
  const selectedDate = data.preferredDate
    ? new Date(`${data.preferredDate}T00:00:00`)
    : null;

  const formattedDate = selectedDate ? formatDateForDisplay(selectedDate) : "";

  const formattedTime = data.preferredTime
    ? formatTimeForDisplay(data.preferredTime)
    : "";

  return (
    <div className="mx-auto max-w-2xl py-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <span className="text-2xl text-primary" aria-hidden="true">
          ✓
        </span>
      </div>

      <p className="mt-6 text-sm font-medium text-primary">Request Received</p>

      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        We've received your consultation request.
      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
        Thank you for reaching out to Shine Skin Clinic. Our clinic team will
        review your request and contact you to confirm your preferred date and
        time.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-6 text-left">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Preferred Visit
        </p>

        <div className="mt-3">
          <p className="font-medium text-foreground">{formattedDate}</p>

          <p className="mt-1 text-sm text-muted-foreground">{formattedTime}</p>
        </div>

        <div className="mt-5 border-t border-border pt-5">
          <p className="text-sm leading-6 text-muted-foreground">
            We'll contact you using the details you provided.
          </p>
        </div>
      </div>
    </div>
  );
}
