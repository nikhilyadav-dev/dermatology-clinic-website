export default function Announcement() {
  return (
    <div className="announcement bg-primary text-primary-foreground flex items-center justify-center text-sm px-5 py-2 gap-6">
      <span className="font-heading">
        BOOK A CONSULTATION with skin specialists
      </span>
      <span className="dot bg-primary-foreground opacity-50 w-2 h-2 rounded-full "></span>
      <a
        href="/consultation "
        className="border-b-1 border-primary-foreground pb-1 hover:opacity-80 transition-opacity duration-300"
      >
        Book Now →{" "}
      </a>
    </div>
  );
}
