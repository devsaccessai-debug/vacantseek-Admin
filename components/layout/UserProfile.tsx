"use client"

import { motion, AnimatePresence } from "framer-motion"
import { LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { sidebarUser } from "@/data/sidebarItems"

export function UserProfile({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="border-t border-[#94A3B8]/14 px-3 pb-4 pt-4">
      <motion.div
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={cn(
          "flex items-center gap-3 rounded-xl border border-[#94A3B8]/12 bg-white/[0.045] p-2.5 transition-colors duration-200 hover:border-[#3B82F6]/30 hover:bg-white/[0.07]",
          collapsed && "justify-center border-transparent bg-transparent p-0 hover:bg-transparent",
        )}
      >
        <div className="relative grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-[12px] font-bold text-[#F8FAFC] shadow-[0_0_14px_-4px_rgba(56,189,248,0.7)]">
          {sidebarUser.initials}
        </div>

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.18 }}
              className="flex min-w-0 flex-1 flex-col overflow-hidden"
            >
              <span className="truncate text-[13px] font-semibold text-[#F8FAFC]">
                {sidebarUser.userName}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                {sidebarUser.role}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <button
        type="button"
        title={collapsed ? "Sign out" : undefined}
        className={cn(
          "group mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[#94A3B8] transition-all duration-200 hover:bg-white/[0.045] hover:text-[#F8FAFC]",
          collapsed && "justify-center px-0",
        )}
      >
        <LogOut className="size-[18px] shrink-0 text-[#64748B] transition-colors duration-200 group-hover:text-[#F8FAFC]" />
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.18 }}
              className="overflow-hidden whitespace-nowrap text-[14px] font-medium"
            >
              Sign out
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
