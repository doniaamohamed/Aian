"use client";

import React from "react";
import { useLayoutStore } from "@/store/layout/layout.store";

export function Sidebar() {
  const { isSidebarOpen } = useLayoutStore();

  if (!isSidebarOpen) return null;

  return (
    <aside className="w-64 border-r border-white/5 bg-surface/50 h-screen p-4 flex flex-col hidden">
      <div className="flex items-center gap-2 mb-6">
        <span className="font-display font-semibold tracking-wider">AIAN SYSTEM</span>
      </div>
      <nav className="flex-1 space-y-1">
        {/* Navigation placeholder */}
      </nav>
    </aside>
  );
}

export default Sidebar;
