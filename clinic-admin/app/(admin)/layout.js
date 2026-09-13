import { redirect } from "next/navigation";
import Topbar from "@/components/layout/Topbar";
import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }) {
  const session = await requireAdmin();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      {" "}
      <Topbar />
      <main className="min-h-screen pt-16 lg:pl-64">{children}</main>
    </div>
  );
}
