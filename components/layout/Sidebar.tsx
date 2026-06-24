"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Building2, PanelLeftClose, PanelLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { sidebarSections, type SidebarItem as SidebarItemType } from "@/data/sidebarItems"
import { SidebarItem } from "./SidebarItem"
import { UserProfile } from "./UserProfile"

type SidebarProps = {
  collapsed: boolean
  activeRoute: string
  onSelect: (item: SidebarItemType) => void
  onToggleCollapse?: () => void
  showCollapseButton?: boolean
}

export function Sidebar({
  collapsed,
  activeRoute,
  onSelect,
  onToggleCollapse,
  showCollapseButton = true,
}: SidebarProps) {
  return (
    <div
      className="flex h-full flex-col border-r border-[#94A3B8]/14 text-[#F8FAFC]"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 34%), linear-gradient(180deg, #071225 0%, #050B1E 100%)",
      }}
    >
      {/* Logo header */}
      <div
        className={cn(
          "flex h-16 shrink-0 items-center gap-3 px-4",
          collapsed && "justify-center px-0",
        )}
      >
        <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] shadow-[0_0_18px_-4px_rgba(56,189,248,0.7)]">
          <Building2 className="size-[18px] text-[#F8FAFC]" />
        </div>

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.18 }}
              className="flex flex-1 items-center justify-between overflow-hidden"
            >
              <div className="flex flex-col leading-tight">
                <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-[#F8FAFC]">
                  VacantSeek
                </span>
                <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
                  Real Estate
                </span>
              </div>

              {showCollapseButton && onToggleCollapse && (
                <button
                  type="button"
                  onClick={onToggleCollapse}
                  aria-label="Collapse sidebar"
                  className="grid size-8 place-items-center rounded-lg text-[#64748B] transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#F8FAFC]"
                >
                  <PanelLeftClose className="size-[18px]" />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Expand button when collapsed */}
      {collapsed && showCollapseButton && onToggleCollapse && (
        <div className="mb-1 flex justify-center">
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label="Expand sidebar"
            className="grid size-8 place-items-center rounded-lg text-[#64748B] transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#F8FAFC]"
          >
            <PanelLeft className="size-[18px]" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-2 [scrollbar-width:thin]">
        {sidebarSections.map((section, index) => (
          <div key={section.title ?? `section-${index}`} className={cn(index > 0 && "mt-5")}>
            <AnimatePresence initial={false}>
              {section.title && !collapsed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]"
                >
                  {section.title}
                </motion.p>
              )}
            </AnimatePresence>

            {section.title && collapsed && index > 0 && (
              <div className="mx-auto mb-2 h-px w-6 bg-[#94A3B8]/14" />
            )}

            <ul className="flex flex-col gap-1">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.route}
                  item={item}
                  active={activeRoute === item.route}
                  collapsed={collapsed}
                  onSelect={onSelect}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <UserProfile collapsed={collapsed} />
    </div>
  )
}
