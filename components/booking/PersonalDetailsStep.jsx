"use client";

export default function PersonalDetailsStep({ data, errors, onChange }) {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">About You</p>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          A little about you
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          Share your details so our clinic team can get in touch with you.
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="booking-name"
            className="mb-2 block text-sm font-medium"
          >
            Your Name <span className="text-primary">*</span>
          </label>

          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={(event) => onChange("name", event.target.value)}
            placeholder="Enter your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "booking-name-error" : undefined}
            className={[
              "w-full rounded-xl border bg-background px-4 py-3",
              "outline-none transition",
              "focus:border-primary focus:ring-2 focus:ring-primary/10",
              errors.name ? "border-red-500" : "border-border",
            ].join(" ")}
          />

          {errors.name && (
            <p id="booking-name-error" className="mt-2 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="booking-phone"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number <span className="text-primary">*</span>
          </label>

          <input
            id="booking-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            placeholder="Enter your phone number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "booking-phone-error" : undefined}
            className={[
              "w-full rounded-xl border bg-background px-4 py-3",
              "outline-none transition",
              "focus:border-primary focus:ring-2 focus:ring-primary/10",
              errors.phone ? "border-red-500" : "border-border",
            ].join(" ")}
          />

          {errors.phone && (
            <p id="booking-phone-error" className="mt-2 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="booking-email"
            className="mb-2 block text-sm font-medium"
          >
            Email Address
          </label>

          <input
            id="booking-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={data.email}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="Enter your email address"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "booking-email-error" : undefined}
            className={[
              "w-full rounded-xl border bg-background px-4 py-3",
              "outline-none transition",
              "focus:border-primary focus:ring-2 focus:ring-primary/10",
              errors.email ? "border-red-500" : "border-border",
            ].join(" ")}
          />

          {errors.email && (
            <p id="booking-email-error" className="mt-2 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
