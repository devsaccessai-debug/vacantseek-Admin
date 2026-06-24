"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import type { SidebarItem as SidebarItemType } from "@/data/sidebarItems"

type SidebarItemProps = {
  item: SidebarItemType
  active: boolean
  collapsed: boolean
  onSelect: (item: SidebarItemType) => void
}

export function SidebarItem({
  item,
  active,
  collapsed,
  onSelect,
}: SidebarItemProps) {
  const Icon = item.icon

  return (
    <li className="relative">
      <button
        type="button"
        onClick={() => !item.disabled && onSelect(item)}
        disabled={item.disabled}
        aria-current={active ? "page" : undefined}
        title={collapsed ? item.label : undefined}
        className={cn(
          "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left outline-none transition-all duration-200",
          "focus-visible:ring-2 focus-visible:ring-[#38BDF8]/60",
          collapsed && "justify-center px-0",
          item.disabled && "cursor-not-allowed opacity-40",
          active
            ? "text-[#F8FAFC]"
            : "text-[#94A3B8] hover:text-[#F8FAFC] hover:translate-x-0.5",
        )}
      >
        {/* Active background glow */}
        {active && (
          <motion.span
            layoutId="vs-active-bg"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            className="absolute inset-0 rounded-xl border border-[#3B82F6]/30 shadow-[0_0_22px_-6px_rgba(56,189,248,0.55)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(56,189,248,0.12))",
            }}
          />
        )}

        {/* Hover background (only when not active) */}
        {!active && (
          <span className="absolute inset-0 rounded-xl bg-white/[0.045] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        )}

        {/* Left accent bar */}
        {active && (
          <motion.span
            layoutId="vs-active-bar"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#3B82F6] to-[#38BDF8]"
          />
        )}

        <Icon
          className={cn(
            "relative z-10 size-[18px] shrink-0 transition-colors duration-200",
            active
              ? "text-[#38BDF8]"
              : "text-[#64748B] group-hover:text-[#F8FAFC]",
          )}
        />

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.18 }}
              className="relative z-10 flex flex-1 items-center justify-between gap-2 overflow-hidden whitespace-nowrap"
            >
              <span className="text-[14px] font-medium">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-[#3B82F6]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#38BDF8]">
                  {item.badge}
                </span>
              )}
              {typeof item.count === "number" && (
                <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[11px] font-semibold text-[#F8FAFC]">
                  {item.count}
                </span>
              )}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Collapsed tooltip */}
        {collapsed && (
          <span
            role="tooltip"
            className="pointer-events-none absolute left-full ml-3 z-50 origin-left scale-90 whitespace-nowrap rounded-lg border border-[#94A3B8]/15 bg-[#071225] px-2.5 py-1.5 text-[12px] font-medium text-[#F8FAFC] opacity-0 shadow-xl transition-all duration-150 group-hover:scale-100 group-hover:opacity-100"
          >
            {item.label}
          </span>
        )}
      </button>
    </li>
  )
}
