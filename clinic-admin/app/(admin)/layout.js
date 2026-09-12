import Topbar from "@/components/layout/Topbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      {" "}
      <Topbar />{" "}
      <main className="min-h-screen pt-16 lg:pl-64"> {children} </main>{" "}
    </div>
  );
}
