export default function BlogContent({ content }) {
  if (!content) {
    return null;
  }

  return (
    <div
      className="
        prose prose-lg max-w-none
        prose-headings:font-semibold
        prose-headings:text-[#241c24]
        prose-p:text-gray-600
        prose-p:leading-8
        prose-a:text-[#ec4899]
        prose-a:no-underline
        hover:prose-a:text-[#db2777]
        prose-strong:text-[#241c24]
        prose-li:text-gray-600
        prose-img:rounded-2xl
      "
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
