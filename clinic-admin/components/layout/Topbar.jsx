"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Topbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className="fixed left-0 right-0 top-0 z-30 h-16 border-b border-border bg-surface lg:left-64">
        <div className="flex h-full items-center justify-between px-4 sm:px-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-background hover:text-foreground lg:hidden"
            >
              <span className="text-xl">☰</span>
            </button>

            <div>
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                Admin Panel
              </h2>

              <p className="hidden text-xs text-muted sm:block">
                Shine Skin Care
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-foreground">Admin</p>

              <p className="text-xs text-muted">Administrator</p>
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              A
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
