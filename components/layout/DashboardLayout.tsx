"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { MobileSidebar } from "./MobileSidebar"
import { AdminDashboard } from "@/components/admin/AdminDashboard"
import {
  sidebarSections,
  type SidebarItem as SidebarItemType,
} from "@/data/sidebarItems"

const allItems = sidebarSections.flatMap((s) => s.items)

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeRoute, setActiveRoute] = useState(allItems[0]?.route ?? "")

  const activeItem =
    allItems.find((item) => item.route === activeRoute) ?? allItems[0]

  const handleSelect = (item: SidebarItemType) => {
    setActiveRoute(item.route)
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 76 : 280 }}
        transition={{ type: "spring", stiffness: 320, damping: 36 }}
        className="hidden shrink-0 lg:block"
      >
        <Sidebar
          collapsed={collapsed}
          activeRoute={activeRoute}
          onSelect={handleSelect}
          onToggleCollapse={() => setCollapsed((c) => !c)}
        />
      </motion.aside>

      {/* Mobile drawer */}
      <MobileSidebar
        open={mobileOpen}
        activeRoute={activeRoute}
        onClose={() => setMobileOpen(false)}
        onSelect={handleSelect}
      />

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top header */}
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="grid size-9 place-items-center rounded-lg text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
          <h1 className="text-balance text-lg font-semibold tracking-tight text-slate-900">
            {activeItem?.label}
          </h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-[#F5F8FC] p-4 sm:p-6 lg:p-8">
          {activeRoute === "/admin-dashboard" ? (
            <AdminDashboard />
          ) : (
            <div className="mx-auto flex h-full max-w-3xl items-center justify-center">
              <div className="w-full rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white shadow-[0_0_18px_-4px_rgba(56,189,248,0.6)]">
                  {activeItem && <activeItem.icon className="size-6" />}
                </div>
                <h2 className="mb-1 text-xl font-semibold tracking-tight text-slate-900">
                  {activeItem?.label}
                </h2>
                <p className="text-sm leading-relaxed text-slate-500">
                  This section is coming soon.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
