"use client";

import { useEffect, useMemo, useState } from "react";
import { getConsultations } from "./actions";
import ConsultationQuickStatus from "@/components/ui/ConsultationQuickStatus";

const statusOptions = [
  { label: "All", value: "ALL" },
  { label: "New", value: "NEW" },
  { label: "Contacted", value: "CONTACTED" },
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Cancelled", value: "CANCELLED" },
];

const statusStyles = {
  NEW: "bg-blue-50 text-blue-700",
  CONTACTED: "bg-yellow-50 text-yellow-700",
  CONFIRMED: "bg-green-50 text-green-700",
  COMPLETED: "bg-purple-50 text-purple-700",
  CANCELLED: "bg-red-50 text-red-700",
};

const ITEMS_PER_PAGE = 10;

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        statusStyles[status] || "bg-gray-50 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadConsultations() {
      const result = await getConsultations();

      if (result.success) {
        setConsultations(result.consultations);
      } else {
        setError(result.error);
      }

      setLoading(false);
    }

    loadConsultations();
  }, []);

  const stats = useMemo(() => {
    return {
      total: consultations.length,
      new: consultations.filter((item) => item.status === "NEW").length,
      contacted: consultations.filter((item) => item.status === "CONTACTED")
        .length,
      confirmed: consultations.filter((item) => item.status === "CONFIRMED")
        .length,
    };
  }, [consultations]);

  const filteredConsultations = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return consultations.filter((consultation) => {
      const matchesStatus =
        statusFilter === "ALL" || consultation.status === statusFilter;

      if (!searchTerm) {
        return matchesStatus;
      }

      const matchesSearch = [
        consultation.name,
        consultation.phone,
        consultation.email,
        consultation.concern,
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(searchTerm));

      return matchesStatus && matchesSearch;
    });
  }, [consultations, search, statusFilter]);

  const totalPages = Math.ceil(filteredConsultations.length / ITEMS_PER_PAGE);

  const paginatedConsultations = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredConsultations.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredConsultations, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  function handleStatusChange(id, newStatus) {
    setConsultations((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  }

  function clearFilters() {
    setSearch("");
    setStatusFilter("ALL");
    setCurrentPage(1);
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
          Consultations
        </h1>

        <p className="mt-1 text-sm text-muted">
          Manage consultation requests from your website.
        </p>
      </div>

      {/* Summary cards */}
      {!loading && !error && (
        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <SummaryCard label="Total" value={stats.total} />

          <SummaryCard label="New" value={stats.new} accent="blue" />

          <SummaryCard
            label="Contacted"
            value={stats.contacted}
            accent="yellow"
          />

          <SummaryCard
            label="Confirmed"
            value={stats.confirmed}
            accent="green"
          />
        </div>
      )}

      {/* Filters */}
      {!loading && !error && consultations.length > 0 && (
        <div className="mb-5 rounded-xl border border-border bg-surface p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="min-w-0 flex-1">
              <label htmlFor="consultation-search" className="sr-only">
                Search consultations
              </label>

              <input
                id="consultation-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name, phone, email..."
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="w-full md:w-52">
              <label htmlFor="status-filter" className="sr-only">
                Filter by status
              </label>

              <select
                id="status-filter"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted">
              Showing {filteredConsultations.length} of {consultations.length}{" "}
              consultations
            </p>

            {(search || statusFilter !== "ALL") && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium text-primary hover:text-primary-hover"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted">Loading consultations...</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Empty database */}
      {!loading && !error && consultations.length === 0 && (
        <div className="rounded-xl border border-border bg-surface p-8 text-center sm:p-12">
          <h2 className="text-base font-semibold text-foreground">
            No consultations yet
          </h2>

          <p className="mt-2 text-sm text-muted">
            New consultation requests will appear here.
          </p>
        </div>
      )}

      {/* No results */}
      {!loading &&
        !error &&
        consultations.length > 0 &&
        filteredConsultations.length === 0 && (
          <div className="rounded-xl border border-border bg-surface p-8 text-center sm:p-12">
            <h2 className="text-base font-semibold text-foreground">
              No matching consultations
            </h2>

            <p className="mt-2 text-sm text-muted">
              Try changing your search or status filter.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-sm font-medium text-primary hover:text-primary-hover"
            >
              Clear filters
            </button>
          </div>
        )}

      {/* Results */}
      {!loading && !error && paginatedConsultations.length > 0 && (
        <>
          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-xl border border-border bg-surface md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-border bg-background">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Patient
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Concern
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Preferred Visit
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Submitted
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Status
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {paginatedConsultations.map((consultation) => (
                    <tr
                      key={consultation.id}
                      className="transition-colors hover:bg-background"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-foreground">
                          {consultation.name}
                        </p>

                        <p className="mt-1 text-xs text-muted">
                          {consultation.phone}
                        </p>

                        {consultation.email && (
                          <p className="mt-0.5 max-w-[220px] truncate text-xs text-muted">
                            {consultation.email}
                          </p>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <span className="text-sm text-foreground">
                          {consultation.concern || "—"}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-sm text-foreground">
                          {consultation.preferredDate || "—"}
                        </p>

                        {consultation.preferredTime && (
                          <p className="mt-1 text-xs text-muted">
                            {consultation.preferredTime}
                          </p>
                        )}
                      </td>

                      <td className="px-5 py-4 text-sm text-muted">
                        {formatDate(consultation.createdAt)}
                      </td>

                      <td className="px-5 py-4">
                        <ConsultationQuickStatus
                          consultationId={consultation.id}
                          initialStatus={consultation.status}
                          onStatusChange={handleStatusChange}
                        />
                      </td>

                      <td className="px-5 py-4 text-right">
                        <a
                          href={`/consultations/${consultation.id}`}
                          className="text-sm font-medium text-primary hover:text-primary-hover"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {paginatedConsultations.map((consultation) => (
              <div
                key={consultation.id}
                className="rounded-xl border border-border bg-surface p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-foreground">
                      {consultation.name}
                    </h2>

                    <p className="mt-1 text-xs text-muted">
                      {consultation.phone}
                    </p>
                  </div>

                  <ConsultationQuickStatus
                    consultationId={consultation.id}
                    initialStatus={consultation.status}
                    onStatusChange={handleStatusChange}
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
                  <div className="min-w-0">
                    <p className="text-xs text-muted">Concern</p>

                    <p className="mt-1 truncate text-sm text-foreground">
                      {consultation.concern || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Submitted</p>

                    <p className="mt-1 text-sm text-foreground">
                      {formatDate(consultation.createdAt)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Preferred date</p>

                    <p className="mt-1 text-sm text-foreground">
                      {consultation.preferredDate || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Preferred time</p>

                    <p className="mt-1 text-sm text-foreground">
                      {consultation.preferredTime || "—"}
                    </p>
                  </div>
                </div>

                {consultation.email && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs text-muted">Email</p>

                    <p className="mt-1 truncate text-sm text-foreground">
                      {consultation.email}
                    </p>
                  </div>
                )}

                <div className="mt-4 border-t border-border pt-4">
                  <a
                    href={`/consultations/${consultation.id}`}
                    className="block w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary-hover"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}

function SummaryCard({ label, value, accent }) {
  const accentStyles = {
    blue: "text-blue-600",
    yellow: "text-yellow-600",
    green: "text-green-600",
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
      <p className="text-xs font-medium text-muted sm:text-sm">{label}</p>

      <p
        className={`mt-2 text-2xl font-semibold ${
          accent ? accentStyles[accent] : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-xs text-muted">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground transition hover:bg-background disabled:pointer-events-none disabled:opacity-40"
        >
          Previous
        </button>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground transition hover:bg-background disabled:pointer-events-none disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
