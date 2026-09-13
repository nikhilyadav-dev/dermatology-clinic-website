import { getConsultationById } from "../actions";
import ConsultationStatusSelect from "@/components/ui/ConsultationStatusSelect";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const statusStyles = {
  NEW: "bg-blue-50 text-blue-700",
  CONTACTED: "bg-yellow-50 text-yellow-700",
  CONFIRMED: "bg-green-50 text-green-700",
  COMPLETED: "bg-purple-50 text-purple-700",
  CANCELLED: "bg-red-50 text-red-700",
};

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        statusStyles[status] || "bg-gray-50 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default async function ConsultationDetailsPage({ params }) {
  const { id } = await params;
  const result = await getConsultationById(id);

  if (!result.success) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h1 className="text-base font-semibold text-red-800">
            Consultation not found
          </h1>

          <p className="mt-1 text-sm text-red-700">
            {result.error || "Unable to find this consultation."}
          </p>
        </div>
      </div>
    );
  }

  const consultation = result.consultation;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <a
          href="/consultations"
          className="text-sm font-medium text-primary hover:text-primary-hover"
        >
          ← Back to consultations
        </a>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
              Consultation Details
            </h1>

            <p className="mt-1 text-sm text-muted">
              Submitted on {formatDate(consultation.createdAt)}
            </p>
          </div>

          <StatusBadge status={consultation.status} />
        </div>
      </div>

      {/* Details */}
      <div className="grid gap-5 lg:grid-cols-3">
        {/* Patient information */}
        <section className="rounded-xl border border-border bg-surface p-5 sm:p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-foreground">
            Patient Information
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <DetailItem label="Name" value={consultation.name} />

            <DetailItem label="Phone" value={consultation.phone} />

            <DetailItem
              label="Email"
              value={consultation.email || "Not provided"}
            />

            <DetailItem
              label="Concern"
              value={consultation.concern || "Not specified"}
            />
          </div>
        </section>

        {/* Appointment */}
        <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-base font-semibold text-foreground">
            Consultation
          </h2>

          <div className="mt-5 space-y-5">
            <DetailItem
              label="Preferred date"
              value={consultation.preferredDate || "Not provided"}
            />

            <DetailItem
              label="Preferred time"
              value={consultation.preferredTime || "Not provided"}
            />

            <DetailItem
              label="Source"
              value={consultation.source || "Website"}
            />

            <div className="border-t border-border pt-5">
              <ConsultationStatusSelect
                consultationId={consultation.id}
                initialStatus={consultation.status}
              />
            </div>
          </div>
        </section>

        {/* Message */}
        {consultation.message && (
          <section className="rounded-xl border border-border bg-surface p-5 sm:p-6 lg:col-span-3">
            <h2 className="text-base font-semibold text-foreground">Message</h2>

            <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-muted">
              {consultation.message}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </p>

      <p className="mt-1 break-words text-sm text-foreground">{value}</p>
    </div>
  );
}
