export default function BookingError({ onRetry }) {
  return (
    <div className="mx-auto max-w-2xl py-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <span className="text-xl">!</span>
      </div>

      <p className="mt-6 text-sm font-medium text-primary">
        Something went wrong
      </p>

      <h2 className="mt-2 text-3xl font-semibold tracking-tight">
        We couldn't send your request.
      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
        Something went wrong while sending your consultation request. Please try
        again.
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover"
      >
        Try Again
      </button>
    </div>
  );
}
