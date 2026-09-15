export default function BlogEmptyState({ message = "No blogs found." }) {
  return (
    <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-[#f9fafb] px-6 text-center">
      <div>
        <h2 className="text-lg font-semibold text-[#241c24]">
          No blogs available
        </h2>

        <p className="mt-2 text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
}
