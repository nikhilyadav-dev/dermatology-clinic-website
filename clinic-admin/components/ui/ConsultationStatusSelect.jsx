"use client";

import { useState } from "react";
import { updateConsultationStatus } from "@/app/(admin)/consultations/actions";

const statuses = [
  { label: "New", value: "NEW" },
  { label: "Contacted", value: "CONTACTED" },
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Cancelled", value: "CANCELLED" },
];

export default function ConsultationStatusSelect({
  consultationId,
  initialStatus,
}) {
  const [status, setStatus] = useState(initialStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleChange(event) {
    const newStatus = event.target.value;

    setStatus(newStatus);
    setSaving(true);
    setError("");

    const result = await updateConsultationStatus(consultationId, newStatus);

    if (!result.success) {
      setStatus(initialStatus);
      setError(result.error || "Unable to update status.");
    }

    setSaving(false);
  }

  return (
    <div>
      <label
        htmlFor="consultation-status"
        className="text-xs font-medium uppercase tracking-wide text-muted"
      >
        Update status
      </label>

      <select
        id="consultation-status"
        value={status}
        onChange={handleChange}
        disabled={saving}
        className="mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {statuses.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {saving && <p className="mt-2 text-xs text-muted">Saving...</p>}

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
